const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Borndata = require('./models/borndata');
const country = require('./models/countrydata');
const yearsofrecidence = require('./models/yearsofrecidence');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // Use the PORT environment variable if available

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB URI
const uri = process.env.MONGO_URI;

if (!uri) {
  console.error('MongoDB URI is not defined in the environment variables.');
  process.exit(1); // Exit the process if the URI is missing
}

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => {
    console.error('Database connection error:', err);
    process.exit(1); // Exit the process on connection error
  });

// Fetch all borndata
app.get('/borndata', async (req, res) => {
  try {
    const allBorndata = await Borndata.find(); // Await the asynchronous operation
    res.status(200).json(allBorndata);
  } catch (error) {
    console.error('Error fetching borndata:', error);
    res.status(500).json({ message: 'Failed to fetch borndata.' });
  }
});

// Fetch all countries
app.get('/countries', async (req, res) => {
  try {
    const allCountries = await country.find(); // Await the asynchronous operation
    console.log(allCountries)
    res.status(200).json(allCountries);
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).json({ message: 'Failed to fetch countries.' });
  }
});


// Fetch all yearsofrecidence
app.get('/yearsofrecidence', async (req, res) => {
    try {
      const allyearsofrecidence = await yearsofrecidence.find(); // Await the asynchronous operation
      console.log(allyearsofrecidence)
      res.status(200).json(allyearsofrecidence);
    } catch (error) {
      console.error('Error fetching countries:', error);
      res.status(500).json({ message: 'Failed to fetch countries.' });
    }
  });



// Calculate sum
app.post('/calculate', (req, res) => {
  const { number1, number2 } = req.body;

  if (typeof number1 === 'number' && typeof number2 === 'number') {
    const result = number1 + number2;
    res.status(200).json({ result });
  } else {
    res.status(400).json({ message: 'Invalid input. Please send two numbers.' });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
