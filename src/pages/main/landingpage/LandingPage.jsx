import styles from "./LandingPage.module.css"

const LandingPage = () => {
  return (
    <div className={styles.LandingPage}>
        <div className={styles.Jumbroton}>
            <div className={styles.Background}>
                <div className={styles.Judul}>
                  <div className={styles.Alamat}>
                    <span className={styles.IconLokasi}><i className="bi bi-geo-alt-fill"></i></span>
                    <p className={styles.NamaTempat}>
                      Jl. Lenteng Agung Raya, DKI Jakarta 12640
                    </p>
                  </div>
                  <h1 className={styles.Tagline}>Informasi Masjid dalam Gengaman Anda.</h1>
                  <p className={styles.Deskripsi}>Kami dengan bangga memperkenalkan sebuah inovasi 
                  yang akan mengubah cara Anda melihat dan mengelola masjid Anda.</p>
                  <button className={styles.Tombol}>Masuk</button>
                </div>
                <img src="src/assets/MasjidJumbroton.png" alt="Foto Masjid" className={styles.Masjid} />
            </div>
        </div>
    </div>
  )
}

export default LandingPage;