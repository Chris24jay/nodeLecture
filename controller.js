module.exports = {
    getAll: (request, response) => {
      response.send(books)
    },
    getOneBook: (req, res) => {
      const singleBookId = books
      .findIndex(book => book.id === +req.params.id)
      res.status(200).send(books[singleBookId])
    },
    createBook: (req, res) => {
      req.body.id = id;
      id++;
      books.push(req.body)
      //res.status(201).send()
      res.sendStatus(201);
    },
    updateBook: (req, res) => {
      const {id} = req.params;
      const {body} = req
      books = books.map((book) => {
        if(book.id === +id) {
          book.author = body.author;
          book.title = body.title;
        }
        return book
      })
      res.status(200).send(books);
    },
    deleteBook: (req, res) => {
      books = books
          .filter(book => book.id !== +req.params.id)
      res.status(200).send(books)
    }
  }