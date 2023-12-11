import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../../lib/middleware/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { isAuthenticated } = await useAuth();

      if (isAuthenticated) {
        navigate("/dasbor");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/login`;
    try {
      const response = await axios.post(API_ENDPOINT, {
        email,
        password,
      });
      const { token } = response.data;

      localStorage.setItem("Authorization", token);
      navigate("/dasbor");
      console.log("Login successful", response.data);
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
        <h1>Masuk</h1>
        <form className={styles.KananForm} onSubmit={handleLogin}>
          <small>{error}</small>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Masukan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Masukan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p>Atau masuk dengan</p>
          <div className={styles.KananIcon}>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-google"></i>
            <i className="bi bi-twitter-x"></i>
          </div>
          <button type="submit">Masuk</button>
          <p>
            Dengan masuk kamu menyetujui <span>Syarat & Ketentuan</span> dan{" "}
            <span>Kebijakan Privasi</span> Amana
          </p>
          <p>
            Belum punya akun?{" "}
            <span>
              <Link to="/register">Buat Akun</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
