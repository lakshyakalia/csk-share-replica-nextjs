import "./shareholdingGrid.css";

export default function ShareholdingGrid({ data }) {
  // Extract the years from the first data entry, ignoring the 'Shareholders' key
  const years = data[0]
    ? Object.keys(data[0]).filter((key) => key !== "Shareholders")
    : [];

  return (
    <div>
      <div className="h3">Shareholding Pattern</div>
      <div>
        <div className="overflow-x-auto my-10">
          <table className="grid-table">
            <thead>
              <tr className="">
                <th className="text-left py-4 px-4">Shareholding Pattern</th>
                {years.map((year) => (
                  <th key={year} className="text-left py-4 px-4">
                    {year}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="">
                  <td className="py-4 px-4">{item.Shareholders}</td>
                  {years.map((year) => (
                    <td key={year} className="py-4 px-4">
                      {item[year]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
