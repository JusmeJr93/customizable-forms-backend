import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
import sequelize from './models/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    // origin: ['http://localhost:5173', 'https://customizable-forms.vercel.app'],
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}));

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Backend is running for customizable-forms');
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(err => console.error('Database connection error:', err));