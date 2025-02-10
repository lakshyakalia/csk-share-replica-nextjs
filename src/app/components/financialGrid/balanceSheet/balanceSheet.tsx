export default function BalanceSheet({ assetsData, liabilitiesData }) {
  if (
    (!assetsData || assetsData.length === 0) &&
    (!liabilitiesData || liabilitiesData.length === 0)
  ) {
    return <p>No data available</p>;
  }

  // Extract years from the assetsData and liabilitiesData
  const incomeYears =
    assetsData.length > 0
      ? Object.keys(assetsData[0]).filter((key) => key !== "Assets")
      : [];

  const ratiosYears =
    liabilitiesData.length > 0
      ? Object.keys(liabilitiesData[0]).filter((key) => key !== "Liabilities")
      : [];

  return (
    <div>
      {/* Income Statement Table */}
      {/* <h2 className="text-xl font-bold my-4">P&L Statement</h2> */}
      <table className="grid-table mb-8">
        <thead>
          <tr>
            <th className="text-left py-4 px-4">Assets</th>
            {incomeYears.map((year) => (
              <th key={year} className="text-left py-4 px-4">
                {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {assetsData.map((item, index) => (
            <tr key={index}>
              <td className="py-4 px-4">{item.Assets}</td>
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
            <th className="text-left py-4 px-4">Liabilities</th>
            {ratiosYears.map((year) => (
              <th key={year} className="text-left py-4 px-4">
                {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {liabilitiesData.map((item, index) => (
            <tr key={index}>
              <td className="py-4 px-4">{item.Liabilities}</td>
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
