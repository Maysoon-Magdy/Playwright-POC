import { readFileSync } from "fs";
import path from "path";

// Define the path to the JSON data file
const dataFilePath = path.resolve(__dirname, "../data/signInData.json");

// Function to load and parse JSON data
export function loadSignInData() {
  return JSON.parse(readFileSync(dataFilePath, "utf-8"));
}
