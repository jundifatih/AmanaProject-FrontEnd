import { useEffect, useState } from "react";
import styles from "./FirstForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../lib/middleware/useAuth";
import { useCheckNewUser } from "../../../lib/middleware/useCheckNewUser";
import axios from "axios";

const FirstForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [phone, setPhone] = useState("");
  const [takmirName, setTakmirName] = useState("");
  const [mosqueFile, setMosqueFile] = useState("");
  const [takmirFile, setTakmirFile] = useState("");
  const [position, setPosition] = useState("");
  const [takmirPhone, setTakmirPhone] = useState("");
  const [error, setError] = useState("");
  const [secondPage, setSecondPage] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { isAuthenticated } = await useAuth();

      if (!isAuthenticated) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  useEffect(() => {
    const checkNewUser = async () => {
      const { isNewUser } = await useCheckNewUser();
      if (!isNewUser) {
        navigate("/dasbor");
      }
    };
    checkNewUser();
  }, [navigate]);

  const handleMosqueRegistration = async () => {
    const fileInput = document.querySelector("#mosqueFileInput");
    const mosqueFile = fileInput.files[0];

    const token = localStorage.getItem("Authorization");
    const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/protected/mosque`;

    // Create a FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("phone", phone);
    formData.append("pic", mosqueFile);

    try {
      const response = await axios.post(API_ENDPOINT, formData, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Mosque registered successfully", response.data);
      setSecondPage(true);
    } catch (error) {
      console.error("Error during mosque registration", error);
      handleRegistrationError(error);
    }
  };

  const handleAdminRegistration = async () => {
    const adminFileInput = document.querySelector("#adminFileInput");
    const adminFile = adminFileInput.files[0];

    const token = localStorage.getItem("Authorization");
    const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/protected/takmir`;

    const adminFormData = new FormData();
    adminFormData.append("name", takmirName);
    adminFormData.append("position_id", position);
    adminFormData.append("phone", takmirPhone);
    adminFormData.append("is_webadmin", 1);
    adminFormData.append("pic", adminFile);

    try {
      const adminResponse = await axios.post(API_ENDPOINT, adminFormData, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Web admin registered successfully", adminResponse.data);
      navigate("/dasbor");
    } catch (adminError) {
      console.error("Error during web admin registration", adminError);
      handleRegistrationError(adminError);
    }
  };

  const handleRegistrationError = (error) => {
    if (error.response) {
      console.error("Response status", error.response.status);
      console.error("Response data", error.response.data);
      setError(error.response.data.error);
    }
  };

  return (
    <>
      {!secondPage ? (
        <div className={styles.Firstpage}>
          {/* <img src="src/assets/Logo-Amana2.png" alt="" /> */}
          <div className={styles.FirstForm}>
            <div className={styles.formfirst}>
              <p className={styles.headfirst}>Lengkapi data di bawah ini!</p>
              <label htmlFor="" className={styles.labelfirst}>
                Foto Masjid
              </label>
              <input
                type="file"
                accept=".png,.jpg"
                className={styles.inputfile}
                id="mosqueFileInput"
                onChange={(e) => setMosqueFile(e.target.value)}
                value={mosqueFile}
                name="mosqueFileInput"
              />
              <label htmlFor="nama" className={styles.labelfirst}>
                Nama Masjid
              </label>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={styles.inputfirst}
              />
              <label htmlFor="alamat" className={styles.labelfirst}>
                Alamat
              </label>
              <input
                type="text"
                name="alamat"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={styles.inputfirst}
              />
              <label htmlFor="latitude" className={styles.labelfirst}>
                Latitude
              </label>
              <input
                type="text"
                name="latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className={styles.inputfirst}
              />
              <label htmlFor="longitude" className={styles.labelfirst}>
                Longitude
              </label>
              <input
                type="text"
                name="longitude"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className={styles.inputfirst}
              />
              <label htmlFor="telepon" className={styles.labelfirst}>
                Telepon
              </label>
              <input
                type="text"
                name="telepon"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.inputfirst}
              />
              <p className={styles.warning}>
                *Pastikan semua data sudah sesuai.
              </p>
              <button
                className={styles.buttonfirst}
                onClick={(e) => handleMosqueRegistration(e)}
              >
                Next
              </button>
            </div>
          </div>
          <p className={styles.copyright}>Amana Copyright 2023.</p>
        </div>
      ) : (
        <div className={styles.Firstpage}>
          {/* <img src="src/assets/Logo-Amana2.png" alt="" /> */}
          <div className={styles.FirstForm}>
            <div className={styles.formfirst}>
              <p className={styles.headfirst}>Lengkapi data di bawah ini!</p>
              <label htmlFor="" className={styles.labelfirst}>
                Foto Profil
              </label>
              <input
                type="file"
                accept=".png,.jpg"
                className={styles.inputfile}
                id="adminFileInput"
                onChange={(e) => setTakmirFile(e.target.value)}
                value={takmirFile}
                name="adminFileInput"
              />
              <label htmlFor="nama" className={styles.labelfirst}>
                Nama Pengurus
              </label>
              <input
                type="text"
                name="name"
                value={takmirName}
                onChange={(e) => setTakmirName(e.target.value)}
                className={styles.inputfirst}
              />

              <label htmlFor="longitude" className={styles.labelfirst}>
                Jabatan
              </label>
              <input
                type="text"
                name="longitude"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className={styles.inputfirst}
              />
              <label htmlFor="telepon" className={styles.labelfirst}>
                Telepon
              </label>
              <input
                type="text"
                name="telepon"
                value={takmirPhone}
                onChange={(e) => setTakmirPhone(e.target.value)}
                className={styles.inputfirst}
              />
              <p className={styles.warning}>
                *Pastikan semua data sudah sesuai.
              </p>
              {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  className={styles.buttonfirst}
                  style={{
                    color: "#334C8A",
                    backgroundColor: "white",
                    border: "1px solid #334C8A",
                  }}
                  onClick={() => setSecondPage(false)}
                >
                  Back
                </button> */}
              <button
                className={styles.buttonfirst}
                onClick={(e) => handleAdminRegistration(e)}
              >
                Submit
              </button>
              {/* </div> */}
            </div>
          </div>
          <p className={styles.copyright}>Amana Copyright 2023.</p>
        </div>
      )}
    </>
  );
};

export default FirstForm;
