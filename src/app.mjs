import express from 'express';
import './config/dbConnect.js';
import routes from './routes/routes.js';

const app = express();
routes(app);

app.delete('/livros/:id', (req, res) => {
  books.find((err, books) => {
    res.status(200).json(books);
  });
  let {id} = req.params;
  let index = findBook(id);
  books.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso.`);
});

export default app