// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/productsDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Models
const Product = require('./models/Product');
const User = require('./models/User');

// Routes
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');

app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter);

// Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
