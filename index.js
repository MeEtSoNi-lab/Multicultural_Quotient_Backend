const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Borndata = require('./models/borndata'); 
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB URI
const uri = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

// Fetch all borndata
app.get('/borndata', async (req, res) => {
  try {
    const allborndata = await Borndata.find(); // Await the asynchronous operation
    res.json(allborndata);
  } catch (error) {
    console.error('Error fetching borndata:', error);
    res.status(500).json({ message: 'Failed to fetch borndata.' });
  }
});

// Calculate sum
app.post('/calculate', (req, res) => {
  const { number1, number2 } = req.body;

  if (typeof number1 === 'number' && typeof number2 === 'number') {
    const result = number1 + number2;
    res.json({ result });
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
