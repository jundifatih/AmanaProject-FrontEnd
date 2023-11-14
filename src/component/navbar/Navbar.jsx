import "./StyleNavbar.css"
// function Menu() {
//   var x = document.getElementById("Links");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }


const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="Logo">
            <img src="src/assets/Logo-Amana.png" alt="Logo Amana"/>
            <span><h1>Amana</h1></span>
        </div>
        <div className="Links" id="Links">
            <a href="">Beranda</a>
            <a href="">Berita</a>
            <a href="">Acara</a>
            <a href="">Tentang Kami</a>
        </div>
        <div className="Cari-Masuk" id="Cari-Masuk">
            <input type="text" placeholder="Cari Masjid"/>
            <a href="">Masuk</a>
        </div>
        {/* <a className="icon" onClick={Menu}>
            <i className="bi bi-list"></i>
        </a> */}
    </div>
  )
}

export default Navbar