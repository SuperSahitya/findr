"use server"

export default async function handler(req, res) {
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
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
