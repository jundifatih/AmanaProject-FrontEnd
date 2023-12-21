import { Link } from "react-router-dom";
import Acara2Masjid from "./Acara2Masjid";
import AcaraMasjid from "./AcaraMasjid";
// import DataAcara2 from "./DataAcara2";
import DataAcaraMasjid from "./DataAcaraMasjid";
import styles from "./LandingPage.module.css";
import MasjidTerdekat from "./MasjidTerdekat";
import { useEffect, useState } from "react";
import axios from "axios";

const LandingPage = () => {
  const [mosques, setMosques] = useState();

  const getMosques = async () => {
    const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/mosque`;
    const response = await axios(API_ENDPOINT);
    console.log(response.data.data);
    setMosques(response.data.data);
  };
  useEffect(() => {
    getMosques();
  }, []);
  // Mapping data props acara masjid terdekat (kiri/atas)
  const data = DataAcaraMasjid.map((item) => {
    return (
      <AcaraMasjid
        key={item.masjid}
        poster={item.poster}
        acara={item.acara}
        masjid={item.masjid}
        pukul={item.pukul}
        tanggal={item.tanggal}
        deskripsi={item.deskripsi}
      />
    );
  });

  // Mapping data props acara masjid terdekat (kanan/bawah)
  const data2 = DataAcaraMasjid.map((item) => {
    return (
      <Acara2Masjid
        key={item.acara}
        acara={item.acara}
        masjid={item.masjid}
        tanggal={item.tanggal}
        tanggalShort={item.tanggalShort}
        hari={item.hari}
      />
    );
  });
  // Filter data props acara masjid terdekat yang hanya menampilkan 4 acara (kanan/bawah)
  const Filterdata2 = data2.filter((item, index) => index >= 1 && index <= 4);

  // Mapping data props komponen Masjid Terdekat
  const Mosque = DataAcaraMasjid.map((item) => {
    return (
      <MasjidTerdekat
        key={item.image}
        image={item.image}
        masjid={item.masjid}
      />
    );
  });

  return (
    <div className={styles.LandingPage}>
      {/* Section Jumbroton */}
      <div className={styles.Jumbroton}>
        <div className={styles.Background}>
          <div className={styles.Judul}>
            <div className={styles.Alamat}>
              <span className={styles.IconLokasi}>
                <i className="bi bi-geo-alt-fill"></i>
              </span>
              <p className={styles.NamaTempat}>
                Jl. Lenteng Agung Raya, DKI Jakarta 12640
              </p>
            </div>
            <h1 className={styles.Tagline}>
              Informasi Masjid dalam Gengaman Anda.
            </h1>
            <p className={styles.Deskripsi}>
              Kami dengan bangga memperkenalkan sebuah inovasi yang akan
              mengubah cara Anda melihat dan mengelola masjid Anda.
            </p>
            <Link to="login">
              <button className={styles.Tombol}>Masuk</button>
            </Link>
          </div>
          <img
            src="/src/assets/MasjidJumbroton.png"
            alt="Foto Masjid"
            className={styles.Masjid}
          />
        </div>
      </div>
      {/* End Jumbroton */}

      {/* Section Acara Masjid Disekitar */}
      <div className={styles.AcaraMasjid}>
        <div className={styles.KiriAcara}>
          <h2 className={styles.headingKiri}>Acara Masjid Disekitar</h2>
          {data[0]}
        </div>
        <div className={styles.KananAcara}>
          <Link to="acara">
            <button className={styles.btnLainnya}>Lainnya</button>
          </Link>
          {/* {DataAcara2.map((item2)=>{
              return(
                <Acara2Masjid key= {item2.acara2}
                acara2 ={item2.acara2}
                masjid2 ={item2.masjid2}
                tanggal2 ={item2.tanggal2}
                />
              )
            })} */}
          {Filterdata2}
        </div>
      </div>
      {/* End Acara Masjid Disekitar */}

      {/* Section Billboard */}
      <div className={styles.Billboard}>
        <div className={styles.Billboard1}>
          <p>
            Amana menjadi tempat untuk mempublikasikan informasi masjid dengan
            mudah dan cepat. Pengguna juga dapat dengan cepat menemukan
            informasi masjid di seluruh Indonesia.
          </p>
        </div>
        <div className={styles.Billboard2}>
          <h1>Efisiensi dan juga Transparasi</h1>
        </div>
      </div>
      {/* End Billboard */}

      {/* Section Masjid Terdekat */}
      <div className={styles.TimKami}>
        <h1 className={styles.HeadingMasjidTerdekat}>Masjid Terdekat</h1>
        <div className={styles.section}>
          {mosques?.map((mosque) => {
            return (
              <MasjidTerdekat
                key={mosque.id}
                image={mosque.pic}
                masjid={mosque.name}
              />
            );
          })}
        </div>
      </div>
      {/* End Masjid Terdekat */}
    </div>
  );
};

export default LandingPage;
