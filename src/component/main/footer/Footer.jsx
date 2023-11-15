import styles from "./StyleFooter.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.FooterList}>
            <div className={styles.FooterItem}>
                <div className={styles.satu}>
                    <img src="src/assets/Logo-Amana.png" alt="Logo Amana"/>
                    <span>Amana</span>
                </div>
                <p>Amana merupakan situs website yang dapat menyediakan laporan keuangan yang transparan dan terperinci, 
                informasi tentang kegiatan sosial, dan daftar list Imam beserta jadwalnya.</p>
            </div>
            <div className={styles.FooterItem}>
                <h4>NAVIGASI</h4>
                <p>Beranda</p>
                <p>Berita</p>
                <p>Tentang Kami</p>
            </div>
            <div className={styles.FooterItem}>
                <h4>IKUTI KAMI</h4>
                <p>Instagram</p>
                <p>Tiktok</p>
                <p>X</p>
            </div>
            <div className={styles.FooterItem}>
                <h4>HUBUNGI KAMI</h4>
                <p>Jl. Lenteng Agung Raya, DKI Jakarta 12640</p>
                <p>(62) 896 543 210 (Respon Cepat)</p>
                <p>amana@gmail.com</p>
            </div>
        </div>
        <div className={styles.FooterIcon}>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-discord"></i></a>
            <a href=""><i className="bi bi-github"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
        </div>
    </footer>
  )
}

export default Footer;