"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import DataRep from "./components/DataRep";
import SearchTab from "./components/SearchTab";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

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

  useEffect(() => {
    if (search) {
      setFound(true);
      setLoading(true);
      setError("");
      const query = `${selectedValue.value}=${enteredInput.toUpperCase()}`;
      const fetchData = async () => {
        try {
          const response = await fetch(`/api?${query}`);

          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }

          const data = await response.json();

          if (data.error) {
            throw new Error(data.error.message);
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
        <Navbar></Navbar>
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
            An Error Occured While Fetching Data: {error}
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
              ></DataRep>
            );
          })}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
