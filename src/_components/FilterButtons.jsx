import React from "https://esm.sh/react@19.0.0";

export default function FilterButtons() {
  return (
    <div className="flex justify-center gap-4">
      <form method="GET" className="flex gap-4">
        <select
          name="year"
          className="bg-blue-500 text-white text-lg px-6 py-3 pr-10 rounded cursor-pointer"
        >
          <option value="" className="text-center">
            Filter by year
          </option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>

        <select
          name="sort"
          className="bg-blue-500 text-white text-lg px-6 py-3 pr-10 rounded cursor-pointer"
        >
          <option value="" className="text-center">
            Sort
          </option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button type="submit" className="hidden">
          Apply
        </button>
      </form>
    </div>
  );
}
