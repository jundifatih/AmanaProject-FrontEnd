import { Link } from "react-router-dom";
import styles from "./Register.module.css"

const Register = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.Kiri}>
            <h1>Amana</h1>
            <h2>Ini adalah portal untuk masuk dan mendaftar.</h2>
            <p>Mari bergabung dengan website kami!</p>
        </div>
        <div className={styles.Kanan}>
          <h1>Buat Akun</h1>
          <div className={styles.KananForm}>
            <label htmlFor="email">Nama Lengkap</label>
            <input type="email" placeholder="Masukan nama lengkap" required/>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Masukan email" required/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Masukan password" required />
            <p>Atau gunakan akun</p>
            <div className={styles.KananIcon}>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-google"></i>
              <i className="bi bi-twitter-x"></i>
            </div>
            <Link to="/login">
              <button type="submit">Masuk</button>
            </Link>
            <p>Dengan masuk kamu menyetujui <span>Syarat & Ketentuan</span> dan <span>Kebijakan Privasi</span> Amana</p>
            <p>Sudah punya akun? <span><Link to="/login">Masuk</Link></span></p>
          </div>
        </div>
    </div>
  )
}

export default Register;