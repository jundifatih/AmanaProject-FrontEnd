import React from "react";
import styles from "./MosqueEvent.module.css";
import { Link } from "react-router-dom";
import Image from "/src/assets/ImageAcara/MaulidNabi.png";
const MosqueEvent = () => {
  return (
    <main className={`col-10 ${styles.Main}`}>
      <Link to="/dasbor" className={`${styles.Breadcrumb}`}>
        Acara Masjid
      </Link>
      <div className={`${styles.Row}`}>
        <div className={`col-12 ${styles.Container}`}>
          <div className={`${styles.Row} ${styles.Header}`}>
            Daftar Acara Masjid
            <button>buat baru</button>
          </div>
          <div className={`${styles.Row} ${styles.Body}`}>
            <div className={`col-5 ${styles.Card}`}>
              <div className={`col-4 ${styles.CardBanner}`}>
                <img
                  src={Image}
                  className={`${styles.Img}`}
                  alt="Banner acara"
                />
              </div>
              <div className={`${styles.CardBody}`}>
                <div className={` ${styles.CardItem}`}>
                  <h3>Maulid Nabi Muhammad SAW</h3>
                  <small>21 September 2021 | 20.00 WIB</small>
                </div>
                <div className={`${styles.Row} ${styles.Buttons}`}>
                  <button className={`${styles.Success}`}>Lihat</button>
                  <button className={`${styles.Primary}`}>Edit</button>
                  <button className={`${styles.Danger}`}>Hapus</button>
                </div>
              </div>
            </div>
            <div className={`col-5 ${styles.Card}`}>
              <div className={`col-4 ${styles.CardBanner}`}>
                <img
                  src={Image}
                  className={`${styles.Img}`}
                  alt="Banner acara"
                />
              </div>
              <div className={`${styles.CardBody}`}>
                <div className={` ${styles.CardItem}`}>
                  <h3>Maulid Nabi Muhammad SAW</h3>
                  <small>21 September 2021 | 20.00 WIB</small>
                </div>
                <div className={`${styles.Row} ${styles.Buttons}`}>
                  <button className={`${styles.Success}`}>Lihat</button>
                  <button className={`${styles.Primary}`}>Edit</button>
                  <button className={`${styles.Danger}`}>Hapus</button>
                </div>
              </div>
            </div>
            <div className={`col-5 ${styles.Card}`}>
              <div className={`col-4 ${styles.CardBanner}`}>
                <img
                  src={Image}
                  className={`${styles.Img}`}
                  alt="Banner acara"
                />
              </div>
              <div className={`${styles.CardBody}`}>
                <div className={` ${styles.CardItem}`}>
                  <h3>Maulid Nabi Muhammad SAW</h3>
                  <small>21 September 2021 | 20.00 WIB</small>
                </div>
                <div className={`${styles.Row} ${styles.Buttons}`}>
                  <button className={`${styles.Success}`}>Lihat</button>
                  <button className={`${styles.Primary}`}>Edit</button>
                  <button className={`${styles.Danger}`}>Hapus</button>
                </div>
              </div>
            </div>
            <div className={`col-5 ${styles.Card}`}>
              <div className={`col-4 ${styles.CardBanner}`}>
                <img
                  src={Image}
                  className={`${styles.Img}`}
                  alt="Banner acara"
                />
              </div>
              <div className={`${styles.CardBody}`}>
                <div className={` ${styles.CardItem}`}>
                  <h3>Maulid Nabi Muhammad SAW</h3>
                  <small>21 September 2021 | 20.00 WIB</small>
                </div>
                <div className={`${styles.Row} ${styles.Buttons}`}>
                  <button className={`${styles.Success}`}>Lihat</button>
                  <button className={`${styles.Primary}`}>Edit</button>
                  <button className={`${styles.Danger}`}>Hapus</button>
                </div>
              </div>
            </div>
            <div className={`col-5 ${styles.Card}`}>
              <div className={`col-4 ${styles.CardBanner}`}>
                <img
                  src={Image}
                  className={`${styles.Img}`}
                  alt="Banner acara"
                />
              </div>
              <div className={`${styles.CardBody}`}>
                <div className={` ${styles.CardItem}`}>
                  <h3>Maulid Nabi Muhammad SAW</h3>
                  <small>21 September 2021 | 20.00 WIB</small>
                </div>
                <div className={`${styles.Row} ${styles.Buttons}`}>
                  <button className={`${styles.Success}`}>Lihat</button>
                  <button className={`${styles.Primary}`}>Edit</button>
                  <button className={`${styles.Danger}`}>Hapus</button>
                </div>
              </div>
            </div>
            <div className={`col-5 ${styles.Card}`}>
              <div className={`col-4 ${styles.CardBanner}`}>
                <img
                  src={Image}
                  className={`${styles.Img}`}
                  alt="Banner acara"
                />
              </div>
              <div className={`${styles.CardBody}`}>
                <div className={` ${styles.CardItem}`}>
                  <h3>Maulid Nabi Muhammad SAW</h3>
                  <small>21 September 2021 | 20.00 WIB</small>
                </div>
                <div className={`${styles.Row} ${styles.Buttons}`}>
                  <button className={`${styles.Success}`}>Lihat</button>
                  <button className={`${styles.Primary}`}>Edit</button>
                  <button className={`${styles.Danger}`}>Hapus</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MosqueEvent;
