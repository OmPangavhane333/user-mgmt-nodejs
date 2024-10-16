import mongoose from 'mongoose';
import { envConfig } from '../utils/envConfig';

export const ConnectToDb = async (): Promise<void> =>
    {
        try
        {
            await mongoose.connect(envConfig.MONGO_URI); // get Db connection string from environment
            console.log('Hey Boss you are successfully connected to database');
        }
        catch(error)
        {
            console.error('error connecting to database',error);
            process.exit(1);
        }

    }