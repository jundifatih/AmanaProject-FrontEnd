import { useEffect, useState } from "react";
import styles from "./FirstForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../lib/middleware/useAuth";
import { useCheckNewUser } from "../../../lib/middleware/useCheckNewUser";
import axios from "axios";

const FirstForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const checkAuth = async () => {
      const { isAuthenticated } = await useAuth();

      if (!isAuthenticated) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);
  // useEffect(() => {
  //   const checkNewUser = async () => {
  //     const { isNewUser } = await useCheckNewUser();
  //     if (!isNewUser) {
  //       navigate("/dasbor");
  //     }
  //   };
  //   checkNewUser();
  // }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();

    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    const token = localStorage.getItem("Authorization");
    const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/protected/takmir`;

    // Create a FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("phone", phone);
    formData.append("pic", file); // Append the image file

    try {
      const response = await axios.post(API_ENDPOINT, formData, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "multipart/form-data", // Set the content type
        },
      });

      navigate("/dasbor");
      console.log("register successful", response.data);
    } catch (error) {
      console.error("Error during registration", error);
      if (error.response) {
        console.error("Response status", error.response.status);
        console.error("Response data", error.response.data);
      }
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <div className={styles.Firstpage}>
        {/* <img src="src/assets/Logo-Amana2.png" alt="" /> */}
        <div className={styles.FirstForm}>
          <form
            onSubmit={handleRegister}
            className={styles.formfirst}
            encType="multipart/form-data"
          >
            <p className={styles.headfirst}>Lengkapi data di bawah ini!</p>
            <label htmlFor="" className={styles.labelfirst}>
              Foto Profil
            </label>
            <input
              type="file"
              accept=".png,.jpg"
              className={styles.inputfile}
            />
            <label htmlFor="nama" className={styles.labelfirst}>
              Nama Pengurus
            </label>
            <input
              type="text"
              name="name"
              onClick={(e) => setName(e.target.value)}
              className={styles.inputfirst}
            />

            <label htmlFor="longitude" className={styles.labelfirst}>
              Jabatan
            </label>
            <input
              type="text"
              name="longitude"
              onClick={(e) => setLongitude(e.target.value)}
              className={styles.inputfirst}
            />
            <label htmlFor="telepon" className={styles.labelfirst}>
              Telepon
            </label>
            <input
              type="text"
              name="telepon"
              onClick={(e) => setPhone(e.target.value)}
              className={styles.inputfirst}
            />
            <p className={styles.warning}>*Pastikan semua data sudah sesuai.</p>
            <button className={styles.buttonfirst}>Submit</button>
          </form>
        </div>
        <p className={styles.copyright}>Amana Copyright 2023.</p>
      </div>
    </>
  );
};

export default FirstForm;
