/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styles from "./LandingPage.module.css"

const MasjidTerdekat = (props) => {
  return (
    <div className={styles.box}>
        <img src={props.image} alt={props.masjid}/>
        <h4>{props.masjid}</h4>
        <div className={styles.TombolMasjid}>
            <button>Rute</button>
            <Link to="infomasjid">
                <button>Info</button>
            </Link>
        </div>
    </div>
  )
}

export default MasjidTerdekat