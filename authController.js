// controllers/authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authController = {
    async register(req, res) {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return res.status(422).json({ message: "All fields must be filled correctly" });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ username, password: hashedPassword });
            res.status(201).json({ message: "User registered successfully", user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ where: { username } });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ message: "Invalid credentials" });
            }
            const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ message: "Login successful", token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = authController;
