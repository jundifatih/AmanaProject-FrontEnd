import CardAcara from "./CardAcara";
import DataAcaraMasjid from "../landingpage/DataAcaraMasjid";
import styles from "./StyleAcara.module.css";

const Acara = () => {
  const data = DataAcaraMasjid.map((item) => {
    return (
      <CardAcara
        key={item.poster}
        poster={item.poster}
        acara={item.acara}
        masjid={item.masjid}
        tanggalShort={item.tanggalShort}
        tagline={item.tagline}
      />
    );
  });
  return (
    <div className={styles.Acara}>
      <div className={styles.JumbrotonAcara}>
        <div className={styles.JumbrotonKiri}>
          <img src="src/assets/ImageAcara/IconAcara.png" alt="Icon" />
        </div>
        <div className={styles.JumbotonKanan}>
          <h1>Jelajahi agenda acara terkini.</h1>
          <p>
            Temukan transformasi diri melalui acara islami untuk memperkaya
            pemahaman agama, dan menginspirasi tindakan positif dalam setiap
            langkah hidup.
          </p>
        </div>
      </div>
      <div
        className={styles.SearchAcara}
        style={{
          width: "70%",
          margin: "auto",
          height: "fit-content",
          padding: "15px",
          marginBottom: "3rem",
          left: "15%",
          right: "50%",
        }}
      >
        <div className={styles.ContainerSearch}>
          <div className={styles.Search}>
            <p>Cari Acara</p>
            <input type="text" placeholder="Nama Acara" />
          </div>
          <div className={styles.Search}>
            <p>Cari Lokasi</p>
            <input type="text" placeholder="Nama Lokasi" />
          </div>
          <div className={styles.Search}>
            <p>Pilih Tanggal</p>
            <input type="date" />
          </div>
        </div>
      </div>
      <div className={styles.Judul}>
        <h2>Acara Mendatang</h2>
        <button>Lainnya</button>
      </div>
      <div className={styles.KomponenAcara}>{data}</div>
    </div>
  );
};

export default Acara;
