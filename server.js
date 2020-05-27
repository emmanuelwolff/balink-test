const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/langs', (req, res) => {
  res.json(['EN', 'FR']);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

const port = 5000;
app.listen(port);

console.log(`Form server listening on ${port}`);

