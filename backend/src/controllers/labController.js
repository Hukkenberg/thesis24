exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve patients' });
    }
};

exports.getPatientById = async (req, res) => {
    try {
        const { id } = req.params;
        const patient = await Patient.findByPk(id);
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve patient details' });
    }
};

exports.createPatient = async (req, res) => {
    try {
        const { name, age, gender, diagnosis } = req.body;
        const newPatient = await Patient.create({ name, age, gender, diagnosis });
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create patient' });
    }
};

exports.updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, gender, diagnosis } = req.body;
        const updatedPatient = await Patient.update(
            { name, age, gender, diagnosis },
            { where: { id }, returning: true }
        );
        if (updatedPatient[0] === 0) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.status(200).json(updatedPatient[1][0]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update patient' });
    }
};

exports.deletePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Patient.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.status(200).json({ message: 'Patient deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete patient' });
    }
};
