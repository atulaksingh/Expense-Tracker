import { useSelector } from "react-redux";

const TransactionList = () => {
  const { list, loading } = useSelector((state) => state.transactions);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-4">
      <h2 className="font-bold text-lg mb-2">Transactions</h2>
      <ul className="divide-y divide-gray-200">
        {list.map((t) => (
          <li key={t._id} className="flex justify-between py-2">
            <div>
              <p className="font-medium">{t.description}</p>
              <p className="text-sm text-gray-500">{t.category}</p>
            </div>
            <span
              className={`font-semibold ${
                t.type === "income" ? "text-green-600" : "text-red-600"
              }`}
            >
              ₹{t.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
