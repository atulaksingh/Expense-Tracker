const Transaction = require("../models/Transaction");

// GET transactions
exports.getTransactions = async (req, res) => {
  try {
    const { type, category, startDate, endDate } = req.query;
    const filter = {};

    if (type) filter.type = type;
    if (category) filter.category = category;
    if (startDate && endDate) {
      filter.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    const transactions = await Transaction.find(filter).sort({ date: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new transaction

exports.addTransaction = async (req, res) => {
  try {
    const { type, amount, description, category, date } = req.body;

    if (!type || !amount || !description || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const transaction = new Transaction({
      type,
      amount,
      description,
      category,
      date: date || Date.now(),
    });

    const saved = await transaction.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update transaction

exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Delete transaction

exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
