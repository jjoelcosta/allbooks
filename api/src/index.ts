import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';

dotenv.config();
const app = express();
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/auth', authRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API server listening on http://localhost:${port}`));
