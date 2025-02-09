// import * as XLSX from "xlsx";
// import path from "path";
// import fs from "fs";

// export default function handler(req, res) {
//   try {
//     const filePath = path.resolve("./public/csk_initial_data.xlsx");

//     const fileBuffer = fs.readFileSync(filePath);

//     const workbook = XLSX.read(fileBuffer, { type: "buffer" });
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

//     res.status(200).json(worksheet);

//   } catch (err) {
//     console.error("Error reading Excel file:", err);
//     res.status(500).json({ error: "Failed to load data" });
//   }
// }

// src/app/pages/api/getInitialData.js

export default function handler(req, res) {
  // Example data
  const data = { message: "API is working!" };

  // Send the data as JSON
  res.status(200).json(data);
}
