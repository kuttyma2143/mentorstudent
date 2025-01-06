
import express from 'express';
import dotenv from 'dotenv';
import appRoutes from './src/routes/index.js';

dotenv.config();

const PORT = 8000
const app = express();

app.use(express.json());
app.use('/', appRoutes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
