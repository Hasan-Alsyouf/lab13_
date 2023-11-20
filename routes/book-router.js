const express = require('express');
const bookCont = require('../controllers/book-controller');

let router = express.Router();

router.get('/',bookCont.getAllbooks);

router.post('/',bookCont.addBook);

router.put('/:id',bookCont.updateBook);

router.delete('/:id',bookCont.deleteBook);

module.exports = router;