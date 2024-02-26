"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import DataRep from "./components/DataRep";
import SearchTab from "./components/SearchTab";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState({
    value: "name",
    label: "Name:",
  });
  const [enteredInput, setEnteredInput] = useState("");
  const [search, initiateSearch] = useState(false);
  const KEY = process.env.KEY;

  useEffect(() => {
    if (search) {
      const query = `${selectedValue.value}=${enteredInput.toUpperCase()}`;
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://stalker-api.vercel.app/api/connectToDatabase/?${query}`,
            {
              method: "GET",
              headers: {
                "api-key": KEY,
              },
            }
          );

          if (!response.ok) {
            throw new Error("Error fetching data");
          }

          const data = await response.json();
          console.log(data);
          setData(data);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchData();
      initiateSearch(false);
    }
  }, [search]);
  return (
    <>
      <div className={styles.mainContainer}>
        <Navbar></Navbar>
        <div>Hello</div>
        <SearchTab
          setSelectedValue={setSelectedValue}
          setEnteredInput={setEnteredInput}
          initiateSearch={initiateSearch}
        ></SearchTab>
        <div className={styles.dataContainer}>
          {data.map((value, index) => {
            return (
              <DataRep
                key={index}
                studentName={value.name}
                department={value.department}
                roll={value.rollNumber}
                reg={value.regNumber}
                cgpa={value.cgpa}
                sgpa={value.sgpa}
                passStatus={value.status}
                birthDate={value.birthDate}
              ></DataRep>
            );
          })}
        </div>
        {/* <DataRep
          studentName="Sahitya Kumar Choubey"
          department="DD-BT"
          roll="22BT1005"
          reg="22U10859"
          cgpa={7.9}
          sgpa={8.9}
          birthDate={"11-01-2004"}
          passStatus="pass"
        ></DataRep> */}
      </div>
    </>
  );
}
