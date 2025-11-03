import { useState } from "react";

const FilterBar = ({ onApply, onClear }) => {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const apply = (e) => {
    e.preventDefault();
    onApply({ type, category, startDate, endDate });
  };

  const clear = () => {
    setType("");
    setCategory("");
    setStartDate("");
    setEndDate("");
    onClear();
  };

  return (
    <form onSubmit={apply} className="bg-white p-4 rounded-xl shadow-md mt-4 flex gap-3 flex-wrap items-end">
      <select value={type} onChange={(e)=>setType(e.target.value)} className="border border-gray-300 rounded-md p-2">
        <option value="">All types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        className="border border-gray-300 rounded-md p-2"
      />

      <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)} className="border border-gray-300 rounded-md p-2" />
      <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)} className="border border-gray-300 rounded-md p-2" />

      <button type="submit" className="bg-blue-600 text-gray-700 py-2 px-4 rounded-md">Apply</button>
      <button type="button" onClick={clear} className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md">Clear</button>
    </form>
  );
};

export default FilterBar;
