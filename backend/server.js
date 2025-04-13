const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config(); // Optional: if using .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files (CSS, JS, images) from current directory
app.use(express.static(path.join(__dirname)));

// Serve home.html as main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Disease', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Example API route (optional)
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
