import { NextResponse } from "next/server";
import path from "path";
import * as XLSX from "xlsx";
import fs from "fs";

export const GET = () => {
  try {
    const filePath = path.resolve("./public/csk_initial_data.xlsx");

    const fileBuffer = fs.readFileSync(filePath);

    const workbook = XLSX.read(fileBuffer, { type: "buffer" });

    const allSheetsData: { [key: string]: any[] } = {};

    workbook.SheetNames.forEach((sheetName) => {
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      allSheetsData[sheetName] = jsonData;
    });

    // const sheetName = workbook.SheetNames[0];
    // const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    return new NextResponse(JSON.stringify(allSheetsData), { status: 200 });
    // res.status(200).json(worksheet);
  } catch (err) {
    // console.error("Error reading Excel file:", err);
    return new NextResponse(JSON.stringify("Error reading Excel file:" + err), {
      status: 500,
    });
    // res.status(500).json({ error: "Failed to load data" });
  }
};
