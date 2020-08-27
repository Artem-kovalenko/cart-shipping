const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware ( Body Parser )
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Api running'));

// Define Routes
app.use('/api/products', require('./routes/api/products'));
app.use('/api/cart', require('./routes/api/cart'));
app.use('/api/shipping', require('./routes/api/shipping'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is runnging on port ${PORT}`));