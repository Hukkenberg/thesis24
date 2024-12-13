import { NextApiRequest, NextApiResponse } from 'next';

const appointments = [
    { id: 1, patientId: 1, doctorId: 1, date: '2024-12-15', time: '10:00', status: 'scheduled' },
    { id: 2, patientId: 1, doctorId: 2, date: '2024-12-18', time: '14:00', status: 'pending' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { patientId } = req.query;
        const patientAppointments = appointments.filter(a => a.patientId === parseInt(patientId as string));
        return res.status(200).json(patientAppointments);
    }

    if (req.method === 'POST') {
        const { patientId, doctorId, date, time } = req.body;
        if (!patientId || !doctorId || !date || !time) {
            return res.status(400).send('Missing required fields');
        }
        const newAppointment = {
            id: appointments.length + 1,
            patientId,
            doctorId,
            date,
            time,
            status: 'pending',
        };
        appointments.push(newAppointment);
        res.status(201).json(newAppointment);
    }

    return res.status(405).send('Method not allowed');
}
