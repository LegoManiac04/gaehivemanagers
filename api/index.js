const express = require('express');

const app = express();

app.use(express.static(__dirname + './src/styles'));

app.get('/', (req, res) => {
  res.send(`
    <link rel="stylesheet" type="text/css" href="style.css" />
    <h1>Tes</h1>
    <p>Head to <a href="/login" target="_blank">/login</a> to get started.</p>
  `);
});