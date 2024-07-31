import React from "react";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.mainContainer}>
      <iframe
        style={{
          background: "#21313C",
          border: "none",
          borderRadius: "2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
        }}
        width="360"
        height="500"
        className={styles.charts}
        src="https://charts.mongodb.com/charts-nitdgp-26-sem-3-data-qxqvn/embed/charts?id=66a93523-a18e-49c1-8ec0-8874923b31d8&maxDataAge=-1&theme=dark&autoRefresh=true"
      ></iframe>
      <iframe
        style={{
          background: "#21313C",
          border: "none",
          borderRadius: "2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
        }}
        width="360"
        height="500"
        className={styles.charts}
        src="https://charts.mongodb.com/charts-nitdgp-26-sem-3-data-qxqvn/embed/charts?id=66a935c2-0dc1-4c1e-8adf-23c6b442086f&maxDataAge=-1&theme=dark&autoRefresh=true"
      ></iframe>
      <iframe
        style={{
          background: "#21313C",
          border: "none",
          borderRadius: "2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
        }}
        width="360"
        height="500"
        className={styles.charts}
        src="https://charts.mongodb.com/charts-nitdgp-26-sem-3-data-qxqvn/embed/charts?id=66a936db-acdf-4914-8393-f74724ab8dab&maxDataAge=-1&theme=dark&autoRefresh=false"
      ></iframe>
      <iframe
        style={{
          background: "#21313C",
          border: "none",
          borderRadius: "2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
        }}
        width="360"
        height="500"
        className={styles.charts}
        src="https://charts.mongodb.com/charts-nitdgp-26-sem-3-data-qxqvn/embed/charts?id=66a93769-7552-4bed-8995-24b91e24aaf0&maxDataAge=-1&theme=dark&autoRefresh=false"
      ></iframe>
    </div>
  );
};

export default page;
