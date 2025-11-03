import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTransactions } from "./transactions/transactionSlice";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";
import SummaryCard from "./components/SummaryCard";
import FilterBar from "./components/FilterBar";

function App() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});

  useEffect(() => {
    dispatch(fetchTransactions(filters));
  }, [dispatch, filters]);
  const applyFilters = (f) => {
    const clean = {
      type: f.type || undefined,
      category: f.category || undefined,
      startDate: f.startDate || undefined,
      endDate: f.endDate || undefined,
    };
    setFilters(clean);
  };

  const clearFilters = () => {
    setFilters({});
  };
  return (
    <div className=" mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
     
        Expense Tracker
      </h1>
      <div className="grid grid-cols-2 mb-4">
        <div>
          <TransactionForm />
          <FilterBar onApply={applyFilters} onClear={clearFilters} />
          <SummaryCard />
          <ExpenseChart />
        </div>
        <div>
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default App;
