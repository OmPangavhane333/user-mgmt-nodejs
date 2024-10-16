import * as  dotenv from 'dotenv';
dotenv.config();

export const envConfig = {
    MONGO_URI: process.env.MONGO_URI || '',
    PORT: process.env.PORT || 3000
};
