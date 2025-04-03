const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

app.get('/daily-message', (req, res) => {
  // Could return text or sendFile, etc.
  res.sendFile(path.join(__dirname, '../public/daily-message.txt'));
});

module.exports.handler = serverless(app);