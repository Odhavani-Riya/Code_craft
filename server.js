// const express = require('express')
// const cors = require('cors')
// const dotenv = require('dotenv')

// //dotenv confi.
// dotenv.config()


// //rest object
// const app = express()

// //middlewares
// app.use(cors())
// app.use(express.json())

// //routes
// app.get('/', (req,res) => {
//     res.send(`<h1>Welcome to Node Server</h1>`)
// })
// //port
// const PORT = process.env.PORT || 8080

// //listen
// app.listen(() => {
//     console.log(`Server Started at PORT ${PORT}`)
// })

// server.js

// server.js

// server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import and mount portfolio routes
try {
  const portfolioRouteModule = await import('./routes/portfolioRoute.js');

app.use(express.static(path.join(__dirname, '../MERN_Portfolio/dist')))

  app.use('/api/v1/portfolio', portfolioRouteModule.default);
} catch (error) {
  console.error('❌ Failed to load portfolio routes:', error.message);
}

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname, '../MERN_Portfolio/dist/index.html'))
})

// Sample root route
app.get('/', (req, res) => {
  res.send('✅ Server is running successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server listening at: http://localhost:${PORT}`);
});


