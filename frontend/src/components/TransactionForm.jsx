import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../transactions/transactionSlice";

const TransactionForm = () => {
  const [form, setForm] = useState({
    type: "expense",
    amount: "",
    description: "",
    category: "",
    date: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction(form));
    setForm({ type: "expense", amount: "", description: "", category: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-md space-y-3">
      <div className="flex gap-4">
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border rounded-md p-2 w-1/2"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="border rounded-md p-2 w-1/2"
        />
      </div>

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="border rounded-md p-2 w-full"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="border rounded-md p-2 w-full"
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="border rounded-md p-2 w-full"
      />

      <button
        type="submit"
        className="bg-blue-600 text-blue-600 py-2 px-4 rounded-md w-full hover:bg-blue-700"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
