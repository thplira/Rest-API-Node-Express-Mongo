import mongoose from 'mongoose';
import { dbConnectionMessageSucess, dbConnectionMessageFailure } from '../utils/styleMsgs.js';


const dbName = 'alura-livros';
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, (err) => {
    if (err)
        dbConnectionMessageFailure(dbName, err);
});

const mongo = mongoose.connection;
mongo.once('open', () => {
    dbConnectionMessageSucess(dbName);
});

export default mongo