// src/seeders/20250101-demo-transaction.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("transactions", [
      // Transactions for the year 2024
      {
        name: "Transaction 11",
        amount: 1004.0,
        transaction_date: "2024-01-15",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Transaction 22",
        amount: 1504.5,
        transaction_date: "2024-03-20",
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Transaction 33",
        amount: 2040.0,
        transaction_date: "2024-03-10",
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Transactions for the year 2025
      {
        name: "Transaction 66",
        amount: 1420.0,
        transaction_date: "2025-08-10",
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Transaction 77",
        amount: 1280.25,
        transaction_date: "2025-09-15",
        user_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("transactions", null, {});
  },
};
