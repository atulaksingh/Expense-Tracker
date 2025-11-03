import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = () => {
  const { list } = useSelector((state) => state.transactions);

  const income = list.filter((t) => t.type === "income").reduce((a, b) => a + b.amount, 0);
  const expense = list.filter((t) => t.type === "expense").reduce((a, b) => a + b.amount, 0);

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["#16a34a", "#dc2626"],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-4">
      <h2 className="font-bold text-lg mb-2">Income vs Expense</h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseChart;
