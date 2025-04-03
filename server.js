const express = require('express');
const path = require('path');

const app = express();

app.get('/daily-message', (req, res) => {
  const filePath = path.join(__dirname, 'public/daily-message.txt');
  res.sendFile(filePath);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});