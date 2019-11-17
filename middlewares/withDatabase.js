import { MongoClient } from 'mongodb';

const mongoURI = process.env.MONGODB_URI ? process.env.MONGODB_URI : ''
const client = new MongoClient(mongoURI, { useNewUrlParser: true });

const withDatabase = handler => (req, res) => {
    if (!client.isConnected()) {
        return client.connect().then(() => {
            req.db = client.db('requestotron');
            return handler(req, res);
        });
    }
    req.db = client.db('requestotron');
    return handler(req, res);
};
export default withDatabase;
