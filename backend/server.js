const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { connection, PORT } = require('./config/database');

const revenueRoutes = require('./routes/revenue');

const app = express();

app.use(cors());                
app.use(express.json());       

app.use('/api/revenue', revenueRoutes);   

app.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'API is running' });
});


app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});


app.listen(PORT, async () => {
  try {
    await connection;   
    console.log("Connected to Database");
  } catch (error) {
    console.error(`Database connection error: ${error}`);
  }

  console.log(` Server running on PORT: ${PORT}`);
});
