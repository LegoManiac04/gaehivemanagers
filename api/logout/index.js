const app = require('express')();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch');

app.use(cookieParser());

// Our default cookie options
const cookieOptions = {
    path: '/',                // Send the cookie to all routes
    httpOnly: true,           // Make the cookie not accessible by document.cookie
    sameSite: 'lax',          // Allow incoming links (but not requests) to include the cookie
    secure: true,             // Make sure the cookie is secure
    maxAge: 20 * 24 * 3600 * 1000  // The cookie expires in 20 days
  };
  

// Clear the JWT cookie and redirect back to the index page
app.get('/api/logout', (req, res) => {
    let data = jwt.verify(req.cookies.jwt, process.env.SECRET);
    res.clearCookie('jwt', cookieOptions);
    res.redirect('/');
  });

module.exports = app;