const app = require('express')();

app.get('/api', (req, res) => {
  res.send(`
    <h1>Test</h1>
    <p>Head to <a href="/login" target="_blank">/login</a> to get started.</p>
  `);
});

module.exports = app;