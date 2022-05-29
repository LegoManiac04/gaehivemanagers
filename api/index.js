const app = require('express')();

app.get('/api', (req, res) => {
  res.send(`
    <style lang="scss">
      @import "../styles.scss";
    </style>
    <div class="other-page">
      <h1>Test</h1>
      <p>Head to <a href="/api/login" target="_blank">/api/login</a> to get started.</p>
    </div>
  `);
});

module.exports = app;