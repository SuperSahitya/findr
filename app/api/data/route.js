import { MongoClient } from "mongodb";
const { NextRequest, NextResponse } = require("next/server");

async function runDatabase(thatName, thatRoll, thatReg, thatDate) {
  let me;
  const URI = process.env.MONGODB_URI;
  const client = new MongoClient(URI);
  try {
    await client.connect();
    const database = client.db("Students");
    const collection = database.collection("sem4data");

    if (thatName !== undefined) {
      me = await collection
        .find({
          name: { $regex: `.*${thatName}.*` },
        })
        .toArray();
      console.log(me);
    } else if (thatRoll !== undefined) {
      me = await collection
        .find({
          rollNumber: `${thatRoll}`,
        })
        .toArray();
    } else if (thatReg !== undefined) {
      me = await collection
        .find({
          regNumber: `${thatReg}`,
        })
        .toArray();
    } else if (thatDate !== undefined) {
      me = await collection
        .find({
          birthDate: { $regex: `^${thatDate}` },
        })
        .toArray();
    }

    return me;
  } catch (error) {
    console.log("Database Error:", error.message);
    throw new Error(`Database error: ${error.message}`);
  } finally {
    await client.close();
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const thatName = searchParams.get("name");
    const thatRoll = searchParams.get("roll");
    const thatReg = searchParams.get("reg");
    const thatDate = searchParams.get("date");

    console.log("Parameters:", { thatName, thatRoll, thatReg, thatDate });

    const value = await runDatabase(thatName, thatRoll, thatReg, thatDate);

    console.log("Database Response:", value);

    if (!value || value.length === 0) {
      console.log("No Value Found");
      return NextResponse.json({ error: "No Value Found." }, { status: 404 });
    }

    return NextResponse.json(value);
  } catch (error) {
    console.error("Error in GET handler:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
