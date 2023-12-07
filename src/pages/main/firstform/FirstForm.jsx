import styles from "./FirstForm.module.css"
import { Link } from "react-router-dom";

const FirstForm = () => {
  return (
  <>
    <div className={styles.Firstpage}>
      <div className={styles.FirstForm}>
        <form action="" className={styles.formfirst}>
        <p className={styles.headfirst}>Lengkapi data di bawah ini!</p>
        <label htmlFor="" className={styles.labelfirst}>Foto Profil</label>
        <input type="file" alt="Foto" accept=".png,.jpg" className={styles.inputfile}/>
        <label htmlFor="nama" className={styles.labelfirst}>Nama Masjid</label>
        <input type="text" name="nama" className={styles.inputfirst}/>
        <label htmlFor="alamat" className={styles.labelfirst}>Alamat</label>
        <input type="text" name="alamat" className={styles.inputfirst}/>
        <label htmlFor="latitude" className={styles.labelfirst}>Latitude</label>
        <input type="text" name="latitude" className={styles.inputfirst}/>
        <label htmlFor="longitude" className={styles.labelfirst}>Longitude</label>
        <input type="text" name="longitude" className={styles.inputfirst}/>
        <label htmlFor="telepon" className={styles.labelfirst}>Telepon</label>
        <input type="text" name="telepon" className={styles.inputfirst}/>
        <p className={styles.warning}>*Pastikan semua data sudah sesuai.</p>
        <Link to="/dasbor">
        <button className={styles.buttonfirst}>Submit</button>
        </Link>
        </form>
      </div>
    </div>
  </>
  )
}

export default FirstForm