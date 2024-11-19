const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/jwt");

const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/BooksControllers");

/**
 * 
 * @swagger
 *  tags:
 *  name: Books
 *  description: Books management
 * 
 */

router.get("/", verifyToken, getBooks);
router.get("/:id", verifyToken, getBookById);
router.post("/", verifyToken, createBook);
router.put("/:id", verifyToken, updateBook);
router.delete("/:id", verifyToken, deleteBook);

module.exports = router;
