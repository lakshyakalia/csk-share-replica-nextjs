"use client";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", users: 400 },
  { name: "February", users: 300 },
  { name: "March", users: 200 },
  { name: "April", users: 278 },
  { name: "May", users: 189 },
  { name: "June", users: 239 },
  { name: "July", users: 349 },
];

export default function ShareMetricGraph() {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <div
        style={{
          textAlign: "center",
          fontWeight: 600,
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        Bar Chart
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#8884d8" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
