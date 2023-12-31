/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const MasjidTerdekat = (props) => {
  return (
    <div className={styles.box}>
      <img src={`http://localhost:3000/${props.image}`} alt={props.masjid} />
      <h4>{props.masjid}</h4>
      <div className={styles.TombolMasjid}>
        <Link to="rute">
          <button>Rute</button>
        </Link>
        <Link to="infomasjid">
          <button>Info</button>
        </Link>
      </div>
    </div>
  );
};

export default MasjidTerdekat;
