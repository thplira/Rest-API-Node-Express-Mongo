import express from 'express';
import BookController from '../controllers/books.controller.js';

const router = express.Router();

router
    .get('/books', BookController.listBooks)
    .get('/books/:id', BookController.findOneBook)
    .post('/books', BookController.createBook)
    .put('/books/:id', BookController.updateBook)
    .delete('/books/:id', BookController.removeBook);

export default router