const Admin = require('../models/Admin');

exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.findAll({
            attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt']
        });
        res.status(200).json(admins);
    } catch (error) {
        console.error('Error fetching admins:', error);
        res.status(500).json({ error: 'Failed to retrieve admins' });
    }
};

exports.createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const newAdmin = await Admin.create({ name, email, password });
        res.status(201).json(newAdmin);
    } catch (error) {
        console.error('Error creating admin:', error);
        res.status(500).json({ error: 'Failed to create admin' });
    }
};

exports.updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        if (!name && !email) {
            return res.status(400).json({ error: 'No fields to update' });
        }
        const [updated] = await Admin.update(
            { name, email },
            { where: { id }, returning: true }
        );
        if (updated === 0) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        const updatedAdmin = await Admin.findByPk(id, {
            attributes: ['id', 'name', 'email', 'updatedAt']
        });
        res.status(200).json(updatedAdmin);
    } catch (error) {
        console.error('Error updating admin:', error);
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
        console.error('Error deleting admin:', error);
        res.status(500).json({ error: 'Failed to delete admin' });
    }
};
