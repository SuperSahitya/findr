"use server";

export async function GET(req) {
  const API_KEY = process.env.API_KEY;
  const query = new URLSearchParams(req.query).toString();
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
    return Response.json(data);
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
