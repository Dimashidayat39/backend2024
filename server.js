const express = require('express');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
