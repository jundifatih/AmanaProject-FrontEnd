import styles from "./StyleNavbar.module.css";
// function Menu() {
//   var x = document.getElementById("Links");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Logo}>
        <img src="src/assets/Logo-Amana.png" alt="Logo Amana" />
        <span>
          <h1>Amana</h1>
        </span>
      </div>
      <div className={styles.Links} id="Links">
        <a href="">Beranda</a>
        <a href="">Berita</a>
        <a href="">Acara</a>
        <a href="">Tentang Kami</a>
      </div>
      <div className={styles.CariMasuk} id="Cari-Masuk">
        <input type="text" placeholder="Cari Masjid"/>
        <a href="">Masuk</a>
      </div>
        <a className={styles.Icon}>
            <i className="bi bi-list"></i>
        </a>
    </div>
  );
};

export default Navbar;
