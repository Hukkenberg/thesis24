const Admin = require('../models/Admin');

exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.findAll();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve admins' });
    }
};

exports.createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newAdmin = await Admin.create({ name, email, password });
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create admin' });
    }
};

exports.updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const updatedAdmin = await Admin.update(
            { name, email },
            { where: { id }, returning: true }
        );
        if (updatedAdmin[0] === 0) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        res.status(200).json(updatedAdmin[1][0]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update admin' });
    }
};

exports.deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Admin.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete admin' });
    }
};
