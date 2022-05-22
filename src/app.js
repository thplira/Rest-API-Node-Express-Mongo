import express from 'express';
import './config/dbConnect.js';
import routes from './routes/routes.js';

const app = express();
routes(app);

export default app