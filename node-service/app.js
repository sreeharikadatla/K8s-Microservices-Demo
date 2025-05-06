const express = require('express');
const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello from Node.js!');
});

app.listen(PORT, () => {
  console.log(`Node.js app running at http://localhost:${PORT}`);
});
