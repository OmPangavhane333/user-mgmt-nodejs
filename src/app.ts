import express from 'express';
import userRoutes from './routes/userRoutes';
import { Application } from 'express';
import {envConfig} from './utils/envConfig';
import { Container } from 'inversify';

// initialize express and set up environment
const app: Application = express();
const PORT = envConfig.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);

const container = new Container();


app.listen(PORT, () => {
    console.log(`hey boss your server is running port ${PORT}`);
});

export {container};