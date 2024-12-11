router.post('/upload', authMiddleware, async (req, res) => {
    const { patientId, testType, result } = req.body;
    try {
        const labResult = new LabResultModel({ patientId, testType, result });
        await labResult.save();
        res.status(201).send('Lab result uploaded');
    } catch (error) {
        res.status(500).send('Error uploading lab result');
    }
});
