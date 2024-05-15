import { NextResponse } from "next/server";
import "dotenv";

export async function GET(req) {
  const API_KEY = process.env.API_KEY;
  const query = req.nextUrl.searchParams;
  try {
    const response = await fetch(
      `https://stalker-api.vercel.app/api/connectToDatabase/?${query}`,
      {
        method: "GET",
        headers: {
          "api-key": API_KEY,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
