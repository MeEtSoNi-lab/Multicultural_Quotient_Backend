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
const multiculturalismbenefits= require('./models/multiculturalismbenefits');
const disagreestatements=require('./models/disagreestatements');
const negativestatementscale=require('./models/negativestatementscale');
const interactionculturalgroups=require('./models/interactionculturalgroups');
const multiculturals=require('./models/multiculturals');
const asians = require('./models/asians');
const blacks=require('./models/black');
const latinos=require('./models/latino');
const middleeasterns=require('./models/middleeastern');
const whites=require('./models/white')
// const userRouter=require('./routes/main');
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
  console.log("Hello")
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


// Fetch all culturalfood
app.get('/culturalfood', async (req, res) => {
    try {
      const allculturalfood = await culturalfood.find(); // Await the asynchronous operation
      console.log(allculturalfood)
      res.status(200).json(allculturalfood);
    } catch (error) {
      console.error('Error fetching culturalfood:', error);
      res.status(500).json({ message: 'Failed to fetch culturalfood.' });
    }
  });

// Fetch all contentengagement
app.get('/contentengagement', async (req, res) => {
    try {
      const allcontentengagement = await contentengagement.find(); // Await the asynchronous operation
      console.log(allcontentengagement)
      res.status(200).json(allcontentengagement);
    } catch (error) {
      console.error('Error fetching contentengagement:', error);
      res.status(500).json({ message: 'Failed to fetch contentengagement.' });
    }
  });


// Fetch all multiculturalismbenefits
app.get('/multiculturalismbenefits', async (req, res) => {
    try {
      const allmulticulturalismbenefits = await multiculturalismbenefits.find(); // Await the asynchronous operation
      console.log(allmulticulturalismbenefits)
      res.status(200).json(allmulticulturalismbenefits);
    } catch (error) {
      console.error('Error fetching multiculturalismbenefits:', error);
      res.status(500).json({ message: 'Failed to fetch multiculturalismbenefits.' });
    }
  });

// Fetch all disagreestatements
app.get('/disagreestatements', async (req, res) => {
    try {
      const alldisagreestatements = await disagreestatements.find(); // Await the asynchronous operation
      console.log(alldisagreestatements)
      res.status(200).json(alldisagreestatements);
    } catch (error) {
      console.error('Error fetching disagreestatements:', error);
      res.status(500).json({ message: 'Failed to fetch disagreestatements.' });
    }
  });

// Fetch all negativestatementscale
app.get('/negativestatementscale', async (req, res) => {
    try {
      const allnegativestatementscale = await negativestatementscale.find(); // Await the asynchronous operation
      console.log(allnegativestatementscale)
      res.status(200).json(allnegativestatementscale);
    } catch (error) {
      console.error('Error fetching negativestatementscale:', error);
      res.status(500).json({ message: 'Failed to fetch negativestatementscale.' });
    }
  });


// Fetch all interactionculturalgroups
app.get('/interactionculturalgroups', async (req, res) => {
    try {
      const allinteractionculturalgroups = await interactionculturalgroups.find(); // Await the asynchronous operation
      console.log(allinteractionculturalgroups)
      res.status(200).json(allinteractionculturalgroups);
    } catch (error) {
      console.error('Error fetching interactionculturalgroups:', error);
      res.status(500).json({ message: 'Failed to fetch interactionculturalgroups.' });
    }
  });


// fetch data from multiculturals table

app.get('/multicultural', async (req,res) =>{
  try{
    const multicultural = await multiculturals.find();
    console.log(multicultural);
    res.status(200).json(multicultural);
  } catch(error){
    console.error('Error fetching multicultural data:', error);
      res.status(500).json({ message: 'Failed to fetch multicultural data.' });
  }
})

//fetch data from asians table

app.get('/asians', async (req,res) =>{
  try{
    const asian = await asians.find();
    console.log(asian);
    res.status(200).json(asian);
  } catch(error){
    console.error('Error fetching asian data:', error);
      res.status(500).json({ message: 'Failed to fetch asian data.' });
  }
})

// fetch data from blacks table
app.get('/blacks', async (req,res) =>{
  try{
    const black = await blacks.find();
    console.log(black);
    res.status(200).json(black);
  } catch(error){
    console.error('Error fetching black data:', error);
      res.status(500).json({ message: 'Failed to fetch black data.' });
  }
})


// fetch data from latinos table

app.get('/latinos', async (req,res) =>{
  try{
    const latino = await latinos.find();
    console.log(latino);
    res.status(200).json(latino);
  } catch(error){
    console.error('Error fetching latinos data:', error);
      res.status(500).json({ message: 'Failed to fetch latinos data.' });
  }
})

// fetch data middleeasterns table
app.get('/middleeasterns', async (req,res) =>{
  try{
    const middleeastern = await middleeasterns.find();
    console.log(middleeastern);
    res.status(200).json(middleeastern);
  } catch(error){
    console.error('Error fetching middleeastern data:', error);
      res.status(500).json({ message: 'Failed to fetch middleeastern data.' });
  }
})

// fetch data from whites table
app.get('/whites', async (req,res) =>{
  try{
    const white = await whites.find();
    console.log(white);
    res.status(200).json(white);
  } catch(error){
    console.error('Error fetching white data:', error);
      res.status(500).json({ message: 'Failed to fetch white data.' });
  }
})


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
