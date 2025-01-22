// src/routes/transaction.js
const express = require("express");
const transactionRouter = express.Router();
const { createTransaction } = require("../controllers/transactionController");

transactionRouter.post("/add-transaction", createTransaction);

module.exports = transactionRouter;
