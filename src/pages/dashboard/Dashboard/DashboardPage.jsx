/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./DashboardPage.module.css";
import { Link } from "react-router-dom";
const DashboardPage = () => {
  return (
    <main className={`col-10 ${styles.Main}`}>
      <Link to="/dasbor" className={`${styles.Breadcrumb}`}>
        Dasbor
      </Link>
      <div className={`${styles.Row}`}>
        <div className={`col-6 ${styles.Container}`}>
          <div className={` ${styles.Card}`}>
            <div className={` ${styles.CardHeader}`}>
              <h3>Acara</h3>
              <Link>Lihat Semua</Link>
            </div>
            <div className={` ${styles.CardBody}`}></div>
          </div>
        </div>
        <div className={`col-6 ${styles.Container}`}>
          <div className={` ${styles.Card}`}>
            <div className={` ${styles.CardHeader}`}>
              <h3>Laporan</h3>
              <Link>Lihat Semua</Link>
            </div>
            <div className={` ${styles.CardBody}`}></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
