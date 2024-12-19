import React from "react";
import styles from "./page.module.css";

const page = () => {
  const darkStyle = {
    background: "#21313C",
    border: "none",
    borderRadius: "2px",
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
    width: "350px",
    height: "500px",
  };

  return (
    <div className={styles.mainContainer}>
      <iframe
        style={darkStyle}
        src="https://charts.mongodb.com/charts-nitdgp-26-sem-3-data-qxqvn/embed/charts?id=0f780271-8161-4070-aa06-db2d8254e9bf&maxDataAge=-1&theme=dark&autoRefresh=false"
      ></iframe>
      <iframe
        style={darkStyle}
        src="https://charts.mongodb.com/charts-nitdgp-26-sem-3-data-qxqvn/embed/charts?id=c1669211-a18b-4d2e-bffa-0213dbff3d57&maxDataAge=-1&theme=dark&autoRefresh=false"
      ></iframe>
      <iframe
        style={darkStyle}
        src="https://charts.mongodb.com/charts-nitdgp-26-sem-3-data-qxqvn/embed/charts?id=d4e740d7-f1d6-4716-88b7-a41340622c08&maxDataAge=-1&theme=dark&autoRefresh=false"
      ></iframe>
      <iframe
        style={darkStyle}
        src="https://charts.mongodb.com/charts-nitdgp-26-sem-3-data-qxqvn/embed/charts?id=94d93205-23f3-4d8c-98f7-68585114b9fa&maxDataAge=-1&theme=dark&autoRefresh=false"
      ></iframe>
      <iframe
        style={darkStyle}
        src="https://charts.mongodb.com/charts-nitdgp-26-sem-3-data-qxqvn/embed/charts?id=150c69a1-6575-4171-b972-49e84cec9e46&maxDataAge=-1&theme=dark&autoRefresh=false"
      ></iframe>
    </div>
  );
};

export default page;
