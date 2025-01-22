const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const transactionRouter = require("./routers/transactionRouter");
app.use(express.json());

app.get("/transactions", async (req, res) => {
  const transactions = await db.sequelize.models.Transaction.findAll();
  res.json(transactions);
});
app.use("/api", transactionRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
