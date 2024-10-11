const axios = require('axios');
const Crypto = require('../models/crypto.js');

const fetchAndStoreData = async () => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickers = Object.values(response.data);
    const top10 = tickers.slice(0, 10);

    await Crypto.deleteMany({});

    await Crypto.insertMany(
      top10.map((ticker) => ({
        name: ticker.name,
        last: ticker.last,
        buy: ticker.buy,
        sell: ticker.sell,
        volume: ticker.volume,
        base_unit: ticker.base_unit,
      }))
    );

    console.log('Data fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching and storing data:', error);
  }
};

const getStoredData = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort('name');
    res.json(cryptos);
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  fetchAndStoreData,
  getStoredData,
};
