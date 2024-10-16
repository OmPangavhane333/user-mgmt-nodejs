import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
});

export const User = mongoose.model<IUser>('User', UserSchema);
