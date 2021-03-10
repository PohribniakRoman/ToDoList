const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'build');
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
  console.log('api');
});

app.listen(port, () => {
  console.log('Server is up!');
});