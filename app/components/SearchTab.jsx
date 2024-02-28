"use client";
import React from "react";
import styles from "./searchTab.module.css";
import Select from "react-select";
import { useState } from "react";

const searchTab = ({ setEnteredInput, setSelectedValue, initiateSearch }) => {
  const options = [
    { value: "name", label: "Name:" },
    { value: "roll", label: "Roll:" },
    { value: "reg", label: "Reg:" },
    { value: "date", label: "BirthDate:" },
  ];
  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        backgroundColor: "lightgray",
        border: state.isFocused ? 0 : 0,
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "black" : "white",
      "&:hover": {
        backgroundColor: "lightgray",
        border: state.isFocused ? 0 : 0,
      },
    }),
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.select}>
          <Select
            inputId="my-input-id"
            instanceId="my-instance-id"
            aria-labelledby="my-input-id"
            styles={customStyles}
            className={styles.select}
            defaultValue={options[0]}
            onChange={(v) => {
              setSelectedValue(v);
            }}
            options={options}
          />
        </div>
        <input
          placeholder="Search"
          className={styles.input}
          onChange={(e) => {
            setEnteredInput(e.target.value);
          }}
          onKeyDown={(k) => {
            if (k.key == "Enter") {
              initiateSearch(true);
            }
          }}
        ></input>
        <button className={styles.button} onClick={() => initiateSearch(true)}>
          Search
        </button>
      </div>
    </>
  );
};

export default searchTab;
