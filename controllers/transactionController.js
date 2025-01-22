// src/controllers/transactionController.js
const db = require("../models/index");
const Models = db.sequelize.models;

// Create a new transaction
exports.createTransaction = async (req, res) => {
  const { name, amount, transaction_date, user_id } = req.body;

  try {
    const newTransaction = await Models.Transaction.create({
      name,
      amount,
      transaction_date,
      user_id,
    });

    res.status(201).json(newTransaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the transaction." });
  }
};
