import mongoose from 'mongoose';

export const connect = async() => {
    //remove locahost -> 127.0.0.1
    await mongoose.connect('mongodb://127.0.0.1:27017/tweeter_db');
}
