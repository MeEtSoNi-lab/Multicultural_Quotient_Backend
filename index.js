const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Borndata = require('./models/borndata');
const country = require('./models/countrydata');
const yearsofrecidence = require('./models/yearsofrecidence');
const numbercountries = require('./models/numbercountries');
const traveledcountries=require('./models/traveledcountries');
const languageconverse=require('./models/languageconverse');
const culturalfood=require('./models/culturalfood');
const contentengagement=require('./models/contentengangement');
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
      console.error('Error fetching years:', error);
      res.status(500).json({ message: 'Failed to fetch years.' });
    }
  });


// Fetch all numbercountries
app.get('/numbercountries', async (req, res) => {
    try {
      const allnumbercountries = await numbercountries.find(); // Await the asynchronous operation
      console.log(allnumbercountries)
      res.status(200).json(allnumbercountries);
    } catch (error) {
      console.error('Error fetching years:', error);
      res.status(500).json({ message: 'Failed to fetch years.' });
    }
  });

// Fetch all traveledcountries
app.get('/traveledcountries', async (req, res) => {
    try {
      const alltraveledcountries = await traveledcountries.find(); // Await the asynchronous operation
      console.log(alltraveledcountries)
      res.status(200).json(alltraveledcountries);
    } catch (error) {
      console.error('Error fetching traveledcountries:', error);
      res.status(500).json({ message: 'Failed to fetch traveledcountries.' });
    }
  });

// Fetch all languageconverse
app.get('/languageconverse', async (req, res) => {
    try {
      const alllanguageconverse = await languageconverse.find(); // Await the asynchronous operation
      console.log(alllanguageconverse)
      res.status(200).json(alllanguageconverse);
    } catch (error) {
      console.error('Error fetching languageconverse:', error);
      res.status(500).json({ message: 'Failed to fetch languageconverse.' });
    }
  });


// Fetch all languageconverse
app.get('/culturalfood', async (req, res) => {
    try {
      const alllculturalfood = await culturalfood.find(); // Await the asynchronous operation
      console.log(alllculturalfood)
      res.status(200).json(allculturalfood);
    } catch (error) {
      console.error('Error fetching culturalfood:', error);
      res.status(500).json({ message: 'Failed to fetch culturalfood.' });
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
