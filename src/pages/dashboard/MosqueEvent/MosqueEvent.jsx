import React, { useEffect, useState } from "react";
import styles from "./MosqueEvent.module.css";
import { Link } from "react-router-dom";
import Image from "/src/assets/ImageAcara/MaulidNabi.png";
import axios from "axios";
const MosqueEvent = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [events, setEvents] = useState([]);
  const handleEventInput = async () => {
    const fileInput = document.querySelector("#eventFileInput");
    const eventFile = fileInput.files[0];

    const token = localStorage.getItem("Authorization");
    const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/protected/event`;

    // Create a FormData object
    const formData = new FormData();
    formData.append("title", name);
    formData.append("tagline", tagline);
    formData.append("date", `${date} ${time}`);
    formData.append("description", description);
    formData.append("pic", eventFile);

    try {
      const response = await axios.post(API_ENDPOINT, formData, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Event registered successfully", response.data);
    } catch (error) {
      console.error("Error during mosque registration", error);
    }
  };
  const getEvent = async () => {
    const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/event`;
    const response = await axios(API_ENDPOINT);
    setEvents(response.data.data);
  };

  useEffect(() => {
    getEvent();
  }, [handleEventInput]);
  return (
    <>
      <main className={`col-10 ${styles.Main}`}>
        <Link to="/dasbor" className={`${styles.Breadcrumb}`}>
          Acara Masjid
        </Link>
        <div className={`${styles.Row}`}>
          <div className={`col-12 ${styles.Container}`}>
            <div className={`${styles.Row} ${styles.Header}`}>
              Daftar Acara Masjid
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Tambah Acara
              </button>
            </div>
            <div className={`${styles.Row} ${styles.Body}`}>
              {events.map((event) => {
                return (
                  <div className={`col-5 ${styles.Card}`}>
                    <div className={`col-4 ${styles.CardBanner}`}>
                      <img
                        src={`http://localhost:3000/${event.pic}`}
                        className={`${styles.Img}`}
                        alt="Banner acara"
                      />
                    </div>
                    <div className={`${styles.CardBody}`}>
                      <div className={` ${styles.CardItem}`}>
                        <h3>{event.title}</h3>
                        <small>{event.date}</small>
                      </div>
                      <div
                        className={`${styles.Row} ${styles.Buttons}`}
                        style={{ justifyContent: "start" }}
                      >
                        <Link to={`/detailacara/${event.id}`}>
                          <button className={`${styles.Success} `}>
                            Lihat
                          </button>
                        </Link>
                        {/* <button className={`${styles.Primary}`}>Edit</button>
                  <button className={`${styles.Danger}`}>Hapus</button> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Form Acara
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group row">
                  <label className="col-4 col-form-label">Nama Acara</label>
                  <div className="col-8">
                    <input
                      id="namaAcara"
                      name="namaAcara"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                      className="form-control"
                      required="required"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-4 col-form-label">Poster</label>
                  <div className="col-8">
                    <input
                      id="eventFileInput"
                      name="poster"
                      type="file"
                      accept=".png,.jpg"
                      className="form-control"
                      required="required"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-4 col-form-label">Tagline</label>
                  <div className="col-8">
                    <input
                      id="tagline"
                      name="tagline"
                      onChange={(e) => setTagline(e.target.value)}
                      value={tagline}
                      type="text"
                      className="form-control"
                      required="required"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-4 col-form-label">Pilih Tanggal</label>
                  <div className="col-8">
                    <input
                      id="tanggal"
                      name="tanggal"
                      onChange={(e) => setDate(e.target.value)}
                      value={date}
                      type="date"
                      className="form-control"
                      required="required"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-4 col-form-label">Pilih Jam</label>
                  <div className="col-8">
                    <input
                      id="tanggal"
                      name="tanggal"
                      type="time"
                      onChange={(e) => setTime(e.target.value)}
                      value={time}
                      className="form-control"
                      required="required"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-4 col-form-label">Deskripsi</label>
                  <div className="col-8">
                    <input
                      id="deskripsi"
                      name="deskripsi"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      type="text"
                      className="form-control"
                      required="required"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={(e) => handleEventInput(e)}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MosqueEvent;
