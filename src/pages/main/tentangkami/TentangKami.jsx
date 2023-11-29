import styles from "./TentangKami.module.css"
const TentangKami = () => {
  return (
<>
    <div className={styles.TentangKami}>

        {/* Section Jumbroton Tentang Kami*/}
        <div className={styles.JumbrotonTentangKami}>
            <div className={styles.JumbrotonTentangKamiKiri}>
                <h1>Tentang Amana</h1>
                <p>Amana adalah sebuah Sebuah Platform yang dapat digunakan oleh seluruh DKM di indonesia untuk menyimpan,
                mengelola, dan mempublikasikan informasi kepada para jama`ah dan mempermudah para jama`ah untuk menemukan 
                dan mempelajari informasi mengenai masjid-masjid yang ada di seluruh indonesia.</p>
            </div>
            <div className={styles.JumbrotonTentangKamiKanan}>
                <img src="src/assets/Logo-Amana2.png" alt="" />
            </div>
        </div>
        {/* End Jumbroton Tentang Kami*/}

        {/* Section Card Fitur*/}
        <div className={styles.Fitur}>
            <div className={styles.CardFitur}>
                <i className="bi bi-alarm"></i>
                <h4>Jadwal Imam Shalat</h4>
                <p>Memberikan informasi tentang jadwal imam shalat harian dan khutbah Jumat dapat diakses dengan mudah.</p>
            </div>
            <div className={styles.CardFitur}>
                <i className="bi bi-people"></i>
                <h4>Informasi Sosial</h4>
                <p>Menyediakan informasi tentang kegiatan sosial, pengumuman acara, berita terkini, dan cerita inspiratif.</p>
            </div>
            <div className={styles.CardFitur}>
                <i className="bi bi-geo-alt"></i>
                <h4>Masjid Terdekat</h4>
                <p>Menemukan masjid terdekat dengan lokasi anda, dan melihat informasi-informasi mengenai masjid tersebut.</p>
            </div>
            <div className={styles.CardFitur}>
                <i className="bi bi-card-checklist"></i>
                <h4>Memudahkan DKM</h4>
                <p>Platform yang dapat menarik dan memudahkan keterlibatan para  kepengurusan masjid.</p>
            </div>
            <div className={styles.CardFitur}>
                <i className="bi bi-info-circle"></i>
                <h4>Mengelola Informasi </h4>
                <p>Platform yang menyediakan para pengurus masjid dapat menyimpan dan mengelola informasi-informasi penting yang berkaitan dengan masjid.</p>
            </div>
            <div className={styles.CardFitur}>
                <i className="bi bi-cloud-arrow-up"></i>
                <h4>Publikasi Kegiatan</h4>
                <p>Pengurus masjid dapat mempublikasikan kegiatan-kegiatan yang telah maupun akan dilaksanakan di masjid mereka</p>
            </div>
            <div className={styles.CardFitur}>
                <i className="bi bi-journal-text"></i>
                <h4>Mencatat Transaksi</h4>
                <p>Mencatat dan melacak semua transaksi keuangan masjid, seperti sumbangan, zakat, infak, pengeluaran, dan rencana anggaran.</p>
            </div>
            <div className={styles.CardFitur}>
                <i className="bi bi-emoji-smile"></i>
                <h4>User Friendly</h4>
                <p>Menyajikan user interface yang sesederhana mungkin agar dapat beradaptasi dan dimengerti lebih cepat.</p>
            </div>
        </div>
        {/* End Card Fitur*/}
    </div>
    
    {/* Section Tim Kami */}
    <div className={styles.TimKami}>
        <h1 className={styles.HeadingTimKami}>Tim Kami</h1>
        <div className={styles.section}>
            <div className={styles.box}>
                <img src="src/assets/ImageTim/Muzaki.png" alt="Hustler"/>
                <h3>Muzaki Abdullah Irsyad</h3>
                <h5>Hustler</h5>
            </div>
            <div className={styles.box}>
                <img src="src/assets/ImageTim/Jundi.png" alt="Hacker"/>
                <h3>Muhammad Amar Dafi</h3>
                <h5>Hacker</h5>
            </div>
            <div className={styles.box}>
                <img src="src/assets/ImageTim/Jundi.png" alt="Hacker"/>
                <h3>Muhammad Jundi Fatih</h3>
                <h5>Hacker</h5>
            </div>
            <div className={styles.box}>
                <img src="src/assets/ImageTim/Jundi.png" alt="Hipster"/>
                <h3>Muhammad Zaki Ridhwan</h3>
                <h5>Hipster</h5>
            </div>
            <div className={styles.box}>
                <img src="src/assets/ImageTim/Budiman.png" alt="Hipster"/>
                <h3>Budiman Cahyadi</h3>
                <h5>Hispter</h5>
            </div>
            <div className={styles.box}>
                <img src="src/assets/ImageTim/Jundi.png" alt="Hipster"/>
                <h3>Rahmiyati</h3>
                <h5>Hispter</h5>
            </div>
            <div className={styles.box}>
                <img src="src/assets/ImageTim/Jundi.png" alt="Hipster"/>
                <h3>Ardhina Septiani</h3>
                <h5>Hispter</h5>
            </div>
        </div>
    </div>
    {/* EndTim Kami */}
</>
  )
}

export default TentangKami;