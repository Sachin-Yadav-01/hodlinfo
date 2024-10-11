const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const cryptoRoutes = require('./routes/cryptoRoutes.js');

const app = express();
const port = 3000;

app.use(cors());

connectDB();

app.use('/api/tickers', cryptoRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const { fetchAndStoreData } = require('./controllers/cryptoController');

setInterval(fetchAndStoreData, 5 * 60 * 1000);

fetchAndStoreData();
