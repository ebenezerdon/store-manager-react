const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'webpack/dist')));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'webpack/dist') });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening to Port ${PORT}....`);
});
