// controllers/alumniController.js

const Alumni = require('../models/alumniModel');

const alumniController = {
    async index(req, res) {
        try {
            const alumni = await Alumni.findAll();
            res.status(200).json({ message: "Get All Resource", data: alumni });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async store(req, res) {
        try {
            const { name, phone, address, graduation_year, status, company_name, position } = req.body;
            if (!name || !phone || !address || !graduation_year || !status) {
                return res.status(422).json({ message: "All fields must be filled correctly" });
            }
            const newAlumni = await Alumni.create({ name, phone, address, graduation_year, status, company_name, position });
            res.status(201).json({ message: "Resource is added successfully", data: newAlumni });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const [updated] = await Alumni.update(req.body, { where: { id } });
            if (!updated) {
                return res.status(404).json({ message: "Resource not found" });
            }
            const updatedAlumni = await Alumni.findOne({ where: { id } });
            res.status(200).json({ message: "Resource is updated successfully", data: updatedAlumni });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async destroy(req, res) {
        try {
            const { id } = req.params;
            const deleted = await Alumni.destroy({ where: { id } });
            if (!deleted) {
                return res.status(404).json({ message: "Resource not found" });
            }
            res.status(200).json({ message: "Resource is deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async show(req, res) {
        try {
            const { id } = req.params;
            const alumni = await Alumni.findOne({ where: { id } });
            if (!alumni) {
                return res.status(404).json({ message: "Resource not found" });
            }
            res.status(200).json({ message: "Get Detail Resource", data: alumni });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async search(req, res) {
        try {
            const { name } = req.params;
            const alumni = await Alumni.findAll({ where: { name: { [Sequelize.Op.like]: `%${name}%` } } });
            res.status(200).json({ message: "Get searched resource", data: alumni });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async findByStatus(req, res) {
        try {
            const { status } = req.params;
            const alumni = await Alumni.findAll({ where: { status } });
            res.status(200).json({ message: `Get ${status} resource`, total: alumni.length, data: alumni });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = alumniController;
