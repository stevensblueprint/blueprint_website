const years = ["2025", "2024", "2023"];
const statuses = ["In Progress", "Completed"];

export default function FilterButtons() {
  return (
    <div className="flex gap-4">
      <form method="GET" className="flex gap-4">
        <select
          name="year"
          className="bg-primary text-white border-r-8 border-primary lg:text-lg px-4 lg:px-6 py-3 rounded cursor-pointer"
          aria-label="Filter by year"
        >
          <option value="">Filter by year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          name="sort"
          className="bg-primary text-white border-r-8 border-primary lg:text-lg px-2 lg:px-6 py-3 rounded cursor-pointer"
        >
          <option value="" className="text-center">
            Sort
          </option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <button type="submit" className="hidden">
          Apply
        </button>
      </form>
    </div>
  );
}
