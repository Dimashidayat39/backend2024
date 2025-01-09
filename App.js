const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', studentRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
