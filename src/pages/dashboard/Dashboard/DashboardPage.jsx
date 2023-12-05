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
            <div className={` ${styles.CardBody}`}>
              <div className={` ${styles.CardItem}`}>
                <h3>Maulid Nabi Muhammad SAW</h3>
                <small>21 September 2021 | 20.00 WIB</small>
              </div>
              <div className={` ${styles.CardItem}`}>
                <h3>Tabligh Akbar</h3>
                <small>21 September 2021 | 20.00 WIB</small>
              </div>
              <div className={` ${styles.CardItem}`}>
                <h3>Kuliah Umum</h3>
                <small>21 September 2021 | 20.00 WIB</small>
              </div>
              <div className={` ${styles.CardItem}`}>
                <h3>Lomba Adzan</h3>
                <small>21 September 2021 | 20.00 WIB</small>
              </div>
              <div className={` ${styles.CardItem}`}>
                <h3>Halaqoh Tarbiyah</h3>
                <small>21 September 2021 | 20.00 WIB</small>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-6 ${styles.Container}`}>
          <div className={` ${styles.Card}`}>
            <div className={` ${styles.CardHeader}`}>
              <h3>Laporan</h3>
              <Link>Lihat Semua</Link>
            </div>
            <div className={` ${styles.CardBody}`}>
              <div className={` ${styles.CardItem}`}>
                <h3>Laporan Keuangan Mingguan</h3>
                <small>Jum`at, 24 September 2021 </small>
              </div>
              <div className={` ${styles.CardItem}`}>
                <h3>Laporan Keuangan Mingguan</h3>
                <small>Jum`at, 17 September 2021 </small>
              </div>
              <div className={` ${styles.CardItem}`}>
                <h3>Laporan Keuangan Mingguan</h3>
                <small>Jum`at, 10 September 2021 </small>
              </div>
              <div className={` ${styles.CardItem}`}>
                <h3>Laporan Keuangan Mingguan</h3>
                <small>Jum`at, 03 September 2021 </small>
              </div>
              <div className={` ${styles.CardItem}`}>
                <h3>Laporan Keuangan Bulanan</h3>
                <small>Jum`at, 03 September 2021 </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
