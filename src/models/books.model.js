import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        author: {type: String, required: true},
        publisher: {type: String, required: true},
        pages: {type: Number}
    }
);

export default mongoose.model('books', bookSchema);