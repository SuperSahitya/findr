"use server";
export default async function handler(req, res) {
  const API_KEY = process.env.API_KEY;
  const query = req.query;
  const response = await fetch(
    `https://stalker-api.vercel.app/api/connectToDatabase/?${query}`,
    {
      method: "GET",
      headers: {
        "api-key": API_KEY,
      },
    }
  );
  const data = await response.json();
  res.status(200).json(data);
}
