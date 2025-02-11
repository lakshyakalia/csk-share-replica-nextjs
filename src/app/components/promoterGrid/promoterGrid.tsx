import { Promoter_Or_Management } from "../share/metricSection/metricSection";

interface PromoterProps {
  data: Promoter_Or_Management[];
}

export default function PromoterGrid({ data }: PromoterProps) {
  return (
    <div>
      <div className="h3">Promoters or Management</div>
      <div>
        <div className="overflow-x-auto my-10">
          <table className="grid-table">
            <thead>
              <tr>
                <th className="text-left py-2 px-4">Name</th>
                <th className="text-left py-2 px-4">Designation</th>
                <th className="text-left py-2 px-4">Experience</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">{item.Name}</td>
                  <td className="py-2 px-4">{item.Designation}</td>
                  <td className="py-2 px-4">{item.Experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
