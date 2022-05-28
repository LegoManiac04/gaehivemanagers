const app = require('express')();
const jwt = require('jsonwebtoken')();
const cookieParser = require('cookie-parser')();
const fetch = require('node-fetch')();


// Clear the JWT cookie and redirect back to the index page
app.get('/api/logout', (req, res) => {
    let data = jwt.verify(req.cookies.jwt, process.env.SECRET);
    res.clearCookie('jwt', cookieOptions);
    res.redirect('/');
  });

module.exports = app;