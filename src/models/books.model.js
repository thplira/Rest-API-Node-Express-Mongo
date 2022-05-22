import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        subtitle: {type: String, required: false},
        author: {type: String, required: true},
        publisher: {type: String, required: true},
        isbn: {type: Number, required: true},
        pages: {type: Number}
    }
);

export default mongoose.model('books', bookSchema);

// HERE AN EXAMPLE IF YOU WANNA TEST AND POPULATE YOUR MONGODB
// SEND IT IN THE BODY ON A 'POST' RESQUEST
/**
{
    "title": "Clean Code",
    "subtitle": "A Handbook of Agile Software Craftsmanship",
    "author": "Robert C. Martin",
    "publisher": "Pearson",
    "isbn": "9780136083238",
    "pages": 431
}
*/