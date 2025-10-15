# Simple Auth API with MongoDB

A simple authentication API with Node.js, Express, and MongoDB.

## Features
- ✅ User Registration
- ✅ User Login
- ✅ MongoDB Integration
- ✅ Ready for Vercel Deployment

## Setup

1. Install dependencies:
```bash
npm install
```

2. Update `.env` file with your MongoDB connection string:
```
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/askme?retryWrites=true&w=majority
PORT=5000
```

3. Run the server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

## API Endpoints

### GET /
- Health check endpoint
- Returns: `{ message: "Auth API is running!" }`

### POST /api/register
- Register a new user
- Body: `{ "email": "user@example.com", "password": "yourpassword", "name": "Your Name" }`
- Returns: User info on success

### POST /api/login
- Login existing user
- Body: `{ "email": "user@example.com", "password": "yourpassword" }`
- Returns: User info on success

## Deploy to Vercel

1. Install Vercel CLI (if not installed):
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Add environment variables in Vercel dashboard:
   - Go to your project settings
   - Add `MONGODB_URI` environment variable

## MongoDB Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Get your connection string
5. Update the `.env` file with your connection string

## Note
⚠️ This is a simple auth system for learning. For production:
- Add password hashing (bcrypt)
- Add JWT tokens
- Add input validation
- Add rate limiting
