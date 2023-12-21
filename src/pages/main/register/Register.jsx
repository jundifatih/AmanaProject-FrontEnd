import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../../lib/middleware/useAuth";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRePassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const checkAuth = async () => {
      const { isAuthenticated } = await useAuth();

      if (isAuthenticated) {
        navigate("/dasbor");
      }
    };

    checkAuth();
  }, [navigate]);
  const handleRegister = async (e) => {
    e.preventDefault();
    const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/register`;
    try {
      console.log(username);
      const response = await axios.post(API_ENDPOINT, {
        username,
        email,
        password,
        re_password,
      });

      navigate("/login");
      console.log("register successful", response.data);
    } catch (error) {
      console.error("Error during login", error);
      if (error.response) {
        console.error("Response status", error.response.status);
        console.error("Response data", error.response.data);
      }
      setError(error.response.data.error);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Kiri}>
        <h1>Amana</h1>
        <h2>Ini adalah portal untuk masuk dan mendaftar.</h2>
        <p>Mari bergabung dengan website kami!</p>
      </div>
      <div className={styles.Kanan}>
        <h1>Buat Akun</h1>
        <form className={styles.KananForm} onSubmit={handleRegister}>
          <label htmlFor="username">Nama Pengguna</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Masukan nama pengguna"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Masukan email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Masukan password"
            required
          />
          <label htmlFor="re_password">Ulangi Password</label>
          <input
            onChange={(e) => setRePassword(e.target.value)}
            type="password"
            placeholder="Masukan password"
            required
          />

          <button type="submit">Daftar</button>
          <p>
            Dengan masuk kamu menyetujui <span>Syarat & Ketentuan</span> dan{" "}
            <span>Kebijakan Privasi</span> Amana
          </p>
          <p>
            Sudah punya akun?{" "}
            <span>
              <Link to="/login">Masuk</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
