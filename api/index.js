const app = require('express')();
const jwt = require('jsonwebtoken')();
const cookieParser = require('cookie-parser')();

app.get('/api', (req, res) => {
  res.send(`
    <h1>Test</h1>
    <p>Head to <a href="/login" target="_blank">/login</a> to get started.</p>
  `);
});

// The /auth route
app.get('/api/login', async (req, res) => {
  let data;
  try {
    // If there is a 'jwt' cookie in the browser, and it is successfully
    // verified, set `data` to its data
    data = jwt.verify(req.cookies.jwt, process.env.SECRET);
  } catch (e) {
    // If the JWT verification failed, it will raise an error which is
    // handled here
    data = null;
  }

  if (data) {
    // This code runs if the JWT verification was successful
    // It uses `name` from the JWT's payload and the JWT token itself

    res.redirect('/');
    
  } else {
    if (req.query.privateCode) {
      // If the URL has a `privateCode`, try to verify it with
      // Scratch Auth
      const result = await fetch('https://auth.itinerary.eu.org/api/auth/verifyToken?privateCode=' + req.query.privateCode);
      const json = await result.json();
      const users = await fetch('https://windyorderlynotifications.jupitersleo.repl.co/managers.txt');
      const text = await users.text();
  
      if (json.valid && text.includes(json.username)) {
        // The verification succeeded! Now we'll create a JWT and store
        // it in the browser cookies
        const token = jwt.sign({ name: json.username }, process.env.SECRET, { expiresIn: '20 days' });
        res.cookie('jwt', token, cookieOptions);
        res.redirect('/')
      } else {
        // Since the verification failed, we will allow the user to
        // try to authenticate again
        res.send(`
          <h1>Authentication failed. Are you a listed manager?</h1><span>${text.replaceAll(",", ", ")}</span>
        `);
      }
    } else {
      // When there is no `privateCode`, send the user to Scratch Auth
      // to try to authenticate. After they're done, they will be sent
      // back to /auth with the private code they recieved as a URL
      // query paramete
      res.redirect(
        'https://auth.itinerary.eu.org/auth/?redirect=' +
        Buffer.from('https://dev-ghm.vercel.app/api/login').toString('base64') +
        '&name=Gaehive Managers'
      );
    }
  }
});


// Clear the JWT cookie and redirect back to the index page
app.get('/api/logout', (req, res) => {
  let data = jwt.verify(req.cookies.jwt, process.env.SECRET);
  res.clearCookie('jwt', cookieOptions);
  res.redirect('/');
});

module.exports = app;