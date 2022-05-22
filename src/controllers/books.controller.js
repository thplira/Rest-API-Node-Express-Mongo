import books from '../models/books.model.js';

class BookController {
    
    // GET
    static listBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200)
               .json(books);
        });
    }

    // GET
    static findOneBook = (req, res) => {
        let {id} = req.params;
        books.findById(id, (err, books) => {
            if (!err) {
                res.status(200)
                   .json(books);
            } else {
                res.status(400)
                   .send({message: `Book not found - ${err.message}`});
            }
          
        });
    };

    // POST
    static createBook = (req, res) => {
        let book = new books(req.body);
        book.save((err) => {
            if (err) {
                res.status(500)
                   .send({message: `${err.message}`});
            } else {
                res.status(201)
                   .send(book);
            }
        });
    };

    // PUT
    static updateBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200)
                   .send({message: `Book ${id} updated`});
            } else {
                res.status(500)
                   .send({message: err.message});
            }
        })
    };

    // DELETE
    static removeBook = (req, res) => {
        const id = req.params.id;
        books.remove({id}, (err) => {
            if (!err) {
                res.status(200)
                   .send({message: `Book ${id} removed`});
            } else {
                res.status(500)
                   .send({message: err.message});
            }
        })
    };

}

export default BookController