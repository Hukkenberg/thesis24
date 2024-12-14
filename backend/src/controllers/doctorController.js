
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.findAll();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve doctors' });
    }
};

exports.createDoctor = async (req, res) => {
    try {
        const { name, specialization, email, password } = req.body;
        const newDoctor = await Doctor.create({ name, specialization, email, password });
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create doctor' });
    }
};

exports.updateDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, specialization, email } = req.body;
        const updatedDoctor = await Doctor.update(
            { name, specialization, email },
            { where: { id }, returning: true }
        );
        if (updatedDoctor[0] === 0) {
            return res.status(404).json({ error: 'Doctor not found' });
        }
        res.status(200).json(updatedDoctor[1][0]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update doctor' });
    }
};

exports.deleteDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Doctor.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ error: 'Doctor not found' });
        }
        res.status(200).json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete doctor' });
    }
};
