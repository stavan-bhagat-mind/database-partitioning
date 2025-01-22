// src/seeders/20250101-demo-transaction.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("transactions", [
      // Transactions for the year 2024
      {
        name: "Transaction 1",
        amount: 100.0,
        transaction_date: "2024-01-15",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Transaction 2",
        amount: 150.5,
        transaction_date: "2024-02-20",
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Transaction 3",
        amount: 200.0,
        transaction_date: "2024-03-10",
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Transaction 4",
        amount: 250.75,
        transaction_date: "2024-04-05",
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Transaction 5",
        amount: 300.0,
        transaction_date: "2024-12-31",
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Transactions for the year 2025
      {
        name: "Transaction 6",
        amount: 120.0,
        transaction_date: "2025-01-10",
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Transaction 7",
        amount: 180.25,
        transaction_date: "2025-02-15",
        user_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Transaction 8",
        amount: 220.5,
        transaction_date: "2025-03-20",
        user_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Transaction 9",
        amount: 275.0,
        transaction_date: "2025-06-25",
        user_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Transaction 10",
        amount: 350.0,
        transaction_date: "2025-12-15",
        user_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("transactions", null, {});
  },
};
