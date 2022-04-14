import express from 'express';
import BookController from '../controllers/books.controller.js';

const router = express.Router();

router
    .get('/livros', BookController.listBooks)
    .get('/livros/:id', BookController.findOneBook)
    .post('/livros', BookController.createBook)
    .put('/livros/:id', BookController.updateBook)
    .delete('/livros/:id', BookController.removeBook);

export default router