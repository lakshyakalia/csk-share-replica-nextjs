export default function FinancialOverview({ incomeData, ratiosData }) {
  console.log("Income Data:", incomeData);
  console.log("Ratios Data:", ratiosData);
  // console.log("Income Years:", incomeYears);
  // console.log("Ratios Years:", ratiosYears);
  if (
    (!incomeData || incomeData.length === 0) &&
    (!ratiosData || ratiosData.length === 0)
  ) {
    return <p>No data available</p>;
  }

  // Extract years from the incomeData and liabilitiesData
  const incomeYears =
    incomeData.length > 0
      ? Object.keys(incomeData[0]).filter((key) => key !== "Category")
      : [];

  const ratiosYears =
    ratiosData.length > 0
      ? Object.keys(ratiosData[0]).filter((key) => key !== "Ratios")
      : [];

  return (
    <div>
      {/* Income Statement Table */}
      {/* <h2 className="text-xl font-bold my-4">P&L Statement</h2> */}
      <table className="grid-table mb-8">
        <thead>
          <tr>
            <th className="text-left py-4 px-4">Category</th>
            {incomeYears.map((year) => (
              <th key={year} className="text-left py-4 px-4">
                {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {incomeData.map((item, index) => (
            <tr key={index}>
              <td className="py-4 px-4">{item.Category}</td>
              {incomeYears.map((year) => (
                <td key={year} className="py-4 px-4">
                  {item[year]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Liabilities Table */}
      {/* <h2 className="text-xl font-bold my-4">Financial Liabilities</h2> */}
      <table className="grid-table">
        <thead>
          <tr>
            <th className="text-left py-4 px-4">Ratios</th>
            {ratiosYears.map((year) => (
              <th key={year} className="text-left py-4 px-4">
                {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ratiosData.map((item, index) => (
            <tr key={index}>
              <td className="py-4 px-4">{item.Ratios}</td>
              {ratiosYears.map((year) => (
                <td key={year} className="py-4 px-4">
                  {item[year] !== undefined ? item[year] : "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
