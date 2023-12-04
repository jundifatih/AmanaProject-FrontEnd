import React from "react";
import styles from "./MosqueReport.module.css";
import { Link } from "react-router-dom";

const MosqueReport = () => {
  return (
    <main className={`col-10 ${styles.Main}`}>
      <Link to="/dasbor" className={`${styles.Breadcrumb}`}>
        Laporan Masjid
      </Link>
      <div className={`${styles.Row}`}>
        <div className={`col-12 ${styles.Container}`}>
          <div className={`${styles.Row} ${styles.Header}`}>
            Laporan Bulanan Masjid Al Ikhlas
          </div>
          <div className={`${styles.Row} ${styles.Body}`}>
            <div className={`${styles.Card}`}>
              <h2>Rp 5.000.000</h2>
              Pemasukan
            </div>
            <div className={`${styles.Card}`}>
              <h2>Rp 6.000.000</h2>Pengeluaran
            </div>
            <div className={`${styles.Card}`}>
              <h2>Rp 15.000.000</h2>Kas Saat ini
            </div>
            <h2>Laporan Keunganan Masjid Al Ikhlas</h2>
            <table className="col-12">
              <thead>
                <tr>
                  <td>No</td>
                  <td>Hari/Tanggal</td>
                  <td>Uraian</td>
                  <td>Debet</td>
                  <td>Kredit</td>
                  <td>Saldo</td>
                  <td>Keterangan</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MosqueReport;
