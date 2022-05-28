const app = require('express')();

app.use(express.static(__dirname + '/src/styles'));

app.get('/api', (req, res) => {
  res.send(`
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <h1>Test</h1>
    <p>Head to <a href="/login" target="_blank">/login</a> to get started.</p>
  `);
});

module.exports = app;