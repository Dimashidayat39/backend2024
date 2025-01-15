// app.js

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const alumniRoutes = require('./routes/alumniRoutes');

// Initialize App
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/alumni', alumniRoutes);

// Sync Database and Start Server
sequelize.sync({ force: true }).then(() => {
    console.log("Database synced successfully");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(error => {
    console.error("Failed to sync database: ", error);
});
