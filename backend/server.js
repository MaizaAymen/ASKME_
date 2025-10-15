require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Initialize app
const app = express();

// Connect database (handled safely inside the function)
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Auth API is running!' });
});

// Routes
app.use('/api/auth', authRoutes);

// Export for Vercel Serverless Functions
module.exports = app;

// Only start a server when running locally (not on Vercel)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}
