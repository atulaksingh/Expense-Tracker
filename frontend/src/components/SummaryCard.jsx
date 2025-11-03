import { useSelector } from "react-redux";

const SummaryCard = () => {
  const { list } = useSelector((state) => state.transactions);

  const income = list.filter((t) => t.type === "income").reduce((a, b) => a + b.amount, 0);
  const expense = list.filter((t) => t.type === "expense").reduce((a, b) => a + b.amount, 0);

  return (
    <div className="grid grid-cols-3 gap-4 text-center mt-4">
      <div className="bg-green-100 p-4 rounded-xl shadow">
        <h3 className="text-green-700 font-semibold">Income</h3>
        <p className="text-2xl font-bold">₹{income}</p>
      </div>
      <div className="bg-red-100 p-4 rounded-xl shadow">
        <h3 className="text-red-700 font-semibold">Expense</h3>
        <p className="text-2xl font-bold">₹{expense}</p>
      </div>
      <div className="bg-blue-100 p-4 rounded-xl shadow">
        <h3 className="text-blue-700 font-semibold">Balance</h3>
        <p className="text-2xl font-bold">₹{income - expense}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
