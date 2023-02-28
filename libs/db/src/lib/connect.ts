import { connect, connection, ConnectOptions } from 'mongoose';

const { MONGO_URI = 'mongodb://localhost:27017/swiftsell' } = process.env;

const options: ConnectOptions = {
    connectTimeoutMS: 1000,
};

export const connectToDatabase = async () => {
    if (!connection.readyState) {
        console.log('Connecting to ', MONGO_URI);
        connect(MONGO_URI, options);
    }
};
