import { Link } from "react-router-dom"
import styles from "./Berita.module.css"

const Berita = () => {
  return (
    <div className={styles.Berita}>
        <div className={styles.Image1}>
            <h2 className={styles.Image1Heading}>
            Batasi Pengunjung Masjid Al Aqsa, Israel Usir Jemaah Pakai Gas Air Mata
            </h2>
            <p className={styles.Image1WM}>
            By detikHikmah 
            <span>Baru saja</span>
            </p>
        </div>
        <div className={styles.EtalaseImage2}>
            <div className={styles.Image2}>
                <h2 className={styles.Image1Heading}>
                Godaan Jin Kepada Manusia
                </h2>
            </div>
            <div>
                <h2 className={styles.Image2Heading}>
                Dalil Menutup Aib Orang Lain Lengkap dengan Doanya
                </h2>  
                <p className={styles.Image2WM}>
                    By detikHikmah
                    <span>Sep. 22,2023</span>
                </p>
                <p className={styles.ImageDesc}>
                Aib harus ditutupi. Sesuai anjuran Rasulullah SAW, 
                setiap muslim dituntut untuk menutup aib orang lain. 
                Manusia tidak akan pernah luput dari kesalahan dan dosa, kecuali para Rasul. 
                </p>
            
            </div>
        </div>
        <div className={styles.BeritaBaris2}>
            <h1 className={styles.BeritaTerbaru}>Berita Terbaru</h1>
            <div className={styles.PembungkusBerita2}>
                <div  className={styles.EtalaseImage3}>
                    <div className={styles.Image3}>
                        <h2 className={styles.Image3Heading}>
                        Tentang Bangsa Rum yang Khianati Bangsa Islam di Akhir Zaman
                        </h2> 
                        <p className={styles.Image1WM}>
                        By detikHikmah 
                        <span>Sep. 24, 2023</span>
                        </p>
                    </div>
                    <div>
                        <p className={styles.ImageDesc}>
                        Bangsa Rum disebut dalam salah satu tanda kiamat, khususnya saat pertempuran besar di akhir zaman. 
                        Bangsa ini dikatakan juga akan mengkhianati Islam.
                        <br />
                        <br />
                        Keberadaan bangsa Rum disebutkan dalam Al-Qur`an dan sejumlah hadits. Allah SWT menurunkan satu surat yang membahas tentang bangsa ini, yakni surah ke-30 dalam urutan mushaf, Ar Rum (Romawi). Disebutkan dalam buku...
                        </p>
                    </div>
                </div>
                <div  className={styles.EtalaseImage3}>
                    <div className={styles.Image3}>
                        <h2 className={styles.Image3Heading}>
                        Tentang Bangsa Rum yang Khianati Bangsa Islam di Akhir Zaman
                        </h2> 
                        <p className={styles.Image1WM}>
                        By detikHikmah 
                        <span>Sep. 24, 2023</span>
                        </p>
                    </div>
                    <div>
                        <p className={styles.ImageDesc}>
                        Salah satu dari dua bentuk syahadat adalah syahadat tauhid. 
                        Syahadat tauhid artinya apa?
                        <br />
                        <br />
                        Syahadat merupakan dua perkataan pengakuan yang diucapkan dengan 
                        lisan dan dibenarkan oleh hati untuk menjadikan diri orang Islam.
                        <br />
                        <br />
                        Pengertian ini diambil dari buku Pendidikan Agama Islam untuk 
                        Perguruan Tinggi karya Beni Kurniawan. Apabila ada seseorang yang...
                        </p>
                    </div>
                </div>
                <div className={styles.EtalaseImage4}>
                    <div className={styles.SedangTrending}>
                        <p>Sedang Trending</p>
                        <Link to="" className={styles.BtnSedangTrending}>Lainnya
                        </Link>
                    </div>
                    <div className={styles.SedangTrending1}>
                        <img src="src/assets/JanganPutusAsa.png" alt="" className={styles.SedangTrending1Image}/>
                        <div>
                            <p className={styles.JudulSedangTrending}>Jangan Putus Asa, Allah Sebaik-baik Penolong dan Pelindung</p>
                            <p className={styles.DeskSedangTrending}>Seorang muslim yang beriman tidak boleh berputus asa sebab Allah sebaik-baik penolong dan pelindung.</p>
                            <div className={styles.TanggalPost}>
                            <p>By detikHikmah</p>
                            <p>Sep. 20, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.SedangTrending1}>
                        <img src="src/assets/KTTOKI.png" alt="" className={styles.SedangTrending1Image}/>
                        <div>
                            <p className={styles.JudulSedangTrending}>Saudi Undang Negara OKI Gelar KTT Islam Luar Biasa, Bahas Kondisi Gaza</p>
                            <p className={styles.DeskSedangTrending}>Organisasi Kerja Sama Islam (OKI) akan menggelar Konferensi Tingkat Tinggi 
                            (KTT) Islam bagi negara anggotanya. Konferensi tersebut akan digelar pada Minggu, 12 November 2023 mendatang atas undangan Arab Saudi.</p>
                            <div className={styles.TanggalPost}>
                            <p>By detikHikmah</p>
                            <p>Sep. 18, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.SedangTrending1}>
                        <img src="src/assets/AnakGaza.png" alt="" className={styles.SedangTrending1Image}/>
                        <div>
                            <p className={styles.JudulSedangTrending}>Seruan Anak di Gaza: Kami Tidak Takut, Hasbunallah Wanikmal Wakil</p>
                            <p className={styles.DeskSedangTrending}>Video yang memperlihatkan keberanian salah seorang anak di Gaza 
                            dengan melantangkan keimanannya pada Allah SWT viral di media sosial.</p>
                            <div className={styles.TanggalPost}>
                            <p>By detikHikmah</p>
                            <p>Sep. 17, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.SedangTrending1}>
                        <img src="src/assets/Haji.jpg" alt="" className={styles.SedangTrending1Image}/>
                        <div>
                            <p className={styles.JudulSedangTrending}>RI Dapat Kuota Tambahan Haji 20 Ribu, Begini Detail Pembagiannyaik</p>
                            <p className={styles.DeskSedangTrending}>Rapat membahas berbagai hal, termasuk tambahan kuota haji untuk tahun 
                            1445H/2024M. Nantinya, kuota itu akan dibagi ke jemaah haji reguler dan jemaah haji khusus.</p>
                            <div className={styles.TanggalPost}>
                            <p>By detikHikmah</p>
                            <p>Sep. 16, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Berita