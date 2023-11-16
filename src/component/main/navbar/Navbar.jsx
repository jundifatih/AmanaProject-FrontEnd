import { useEffect, useState } from "react";
import styles from "./StyleNavbar.module.css";

const Navbar = () => {
  const [display, setDisplay] = useState(true);
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize > 830) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [windowSize]);

  return (
    <div className={styles.Navbar}>
      <div className={styles.Logo}>
        <img src="src/assets/Logo-Amana.png" alt="Logo Amana" />
        <span>
          <h1>Amana</h1>
        </span>
      </div>
      <div
        className={styles.Links}
        id="Links"
        style={display ? { display: "block" } : { display: "none" }}
      >
        <a href="" className={styles.List}>
          Beranda
        </a>
        <a href="" className={styles.List}>
          Berita
        </a>
        <a href="" className={styles.List}>
          Acara
        </a>
        <a href="" className={styles.List}>
          Tentang Kami
        </a>
        <div className={styles.SearchArea1}>
          <i className="bi bi-search" id={styles.IconSearch}></i>
          <input type="text" placeholder="Cari Masjid" />
        </div>
        <a href="" className={styles.List}>
          Masuk
        </a>
      </div>
      <div className={styles.CariMasuk} id="Cari-Masuk">
        <div className={styles.SearchArea}>
          <i className="bi bi-search" id={styles.IconSearch}></i>
          <input type="text" placeholder="Cari Masjid" />
        </div>
        <a href="">Masuk</a>
      </div>
      <a
        className={styles.Icon}
        onClick={() => {
          setDisplay(!display);
        }}
      >
        <i className="bi bi-list"></i>
      </a>
    </div>
  );
};

export default Navbar;
