import React from "react";
import styles from "./datarep.module.css"

const DataRep = ({
  studentName,
  department,
  roll,
  reg,
  cgpa,
  sgpa,
  passStatus,
  birthDate,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.dataContainer}>
          <div className={styles.name}>{`${studentName}`}</div>
          <div>{`Department: ${department}`}</div>
          <div>{`Roll: ${roll}`}</div>
          <div>{`Reg: ${reg}`}</div>
          <div>{`CGPA: ${cgpa}`}</div>
          <div>{`SGPA: ${sgpa}`}</div>
          <div>{`Status: ${passStatus}`}</div>
          <div>{`BirthDate: ${birthDate}`}</div>
        </div>
      </div>
    </>
  );
};

export default DataRep;
