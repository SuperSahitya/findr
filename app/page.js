"use client";
import styles from "./page.module.css";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [found, setFound] = useState(true);
  const NEXT_PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY;

  useEffect(() => {
    if (search) {
      setFound(true);
      setData([]);
      setLoading(true);
      setError("");
      const query = `${selectedValue.value}=${enteredInput.toUpperCase()}`;
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/data?${query}`);
          // console.log(response);
          // if (!response.ok) {
          //   console.log(await response.json())
          //   throw new Error(`Error ${response.status}: ${response.statusText}`);
          // }

          const data = await response.json();
          console.log(data);

          if (data.error) {
            throw new Error(data.error);
          }

          setData(data);
          if (data.length == 0) {
            setFound(false);
          }
        } catch (error) {
          setError(error.message);
          console.error("Error:", error);
        }
        setLoading(false);
      };

      fetchData();
      initiateSearch(false);
    }
  }, [search]);
  return (
    <>
      <div className={styles.mainContainer}>
        <SearchTab
          setSelectedValue={setSelectedValue}
          setEnteredInput={setEnteredInput}
          initiateSearch={initiateSearch}
        ></SearchTab>
        {loading && <div className={styles.loader}></div>}
        {error == "" ? (
          ""
        ) : (
          <p className={styles.error}>
            {error}
          </p>
        )}
        {found ? "" : <p className={styles.error2}>No Data Found</p>}
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
                supp={value.suppIn}
                gender={value.gender}
              ></DataRep>
            );
          })}
        </div>
      </div>
    </>
  );
}
