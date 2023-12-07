import styles from "./InfoMasjid.module.css"

const InfoMasjid = () => {
  return (
    <div className={styles.InfoMasjid}>
        <img src="src/assets/ImageMasjid/Al-Insan.jpg" alt="Masjid Al-Insan" />
        <div className={styles.ChannelMasjid}>
          <h1>Masjid Al-Insan</h1>
          <button>Rute</button>
        </div>
        <div className={styles.Petugas}>
          <div className={styles.PetugasKiri}>
            <h1>Petugas Shalat Jum`at</h1>
            <p>23 September 2023</p>
          </div>
          <div className={styles.PetugasKanan}>
            <div>
              <p className={styles.PetugasRole}>Khotib</p>
              <p className={styles.PetugasNama}>Ustadz Fulansyah</p>
            </div>
            <div>
              <p className={styles.PetugasRole}>Imam</p>
              <p className={styles.PetugasNama}>Ustadz Fulansyah</p>
            </div>
            <div>
              <p className={styles.PetugasRole}>Bilal</p>
              <p className={styles.PetugasNama}>Ustadz Fuad</p>
            </div>
          </div>
        </div>
        <div className={styles.Daftar}>
          <div className={styles.DaftarImam}>
            <h1 className={styles.HeadingAcara}>Daftar Imam Masjid</h1>
            <table>
              <thead>
                <th>No</th>
                <th>Nama Lengkap</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ustad Fulansyah</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ustad Yanto</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ustad Agus</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Ustad Hasyim</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.DaftarPengurus}>
            <h1 className={styles.HeadingAcara}>Daftar Pengurus Masjid</h1>
            <table>
              <thead>
                <th>No</th>
                <th>Nama Lengkap</th>
                <th>Jabatan</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ustad Fulansyah</td>
                  <td>Ketua DKM</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ustad Yanto</td>
                  <td>Wakil Ketua DKM</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ustad Agus</td>
                  <td>Bendahara DKM</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Ustad Hasyim</td>
                  <td>Sekretaris DKM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.Laporan}>
          <h1 className={styles.HeadingAcara}>Laporan Keuangan</h1>
          <div className={styles.KomponenLaporan}>
            <div className={styles.CardLaporan}>
              <p className={styles.JudulLaporan}>Pemasukan</p>
              <p className={styles.TangalLaporan}>13/09</p>
              <p className={styles.SaldoLaporan}>RP. 2.000.000</p>
            </div>
            <div className={styles.CardLaporan}>
              <p className={styles.JudulLaporan}>Pengeluaran</p>
              <p className={styles.TangalLaporan}>20/09</p>
              <p className={styles.SaldoLaporan}>RP. 5.000.000</p>
            </div>
            <div className={styles.CardLaporan}>
              <p className={styles.JudulLaporan}>Saldo Awal</p>
              <p className={styles.TangalLaporan}>20/09</p>
              <p className={styles.SaldoLaporan}>Rp. 15.000.000</p>
            </div>
            <div className={styles.CardLaporan}>
              <p className={styles.JudulLaporan}>Saldo Akhir</p>
              <p className={styles.TangalLaporan}>20/09</p>
              <p className={styles.SaldoLaporan}>RP. 13.000.000</p>
            </div>
          </div>
          <div className={styles.TabelLaporan}>
            <table>
              <thead>
                <td colSpan={"7"}>
                  LAPORAN KEUANGAN MASJID AL-INSAN
                </td>
                <tr>
                  <th className={styles.nomor}>No</th>
                  <th>Hari/Tanggal</th>
                  <th>Uraian</th>
                  <th>Debet</th>
                  <th>Kredit</th>
                  <th>Saldo</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.nomor}>1</td>
                  <td className={styles.HariTanggal}>06/09/2023</td>
                  <td className={styles.Uraian}>Peralatan Kebersihan</td>
                  <td className={styles.Uang}>0</td>
                  <td className={styles.Uang}>Rp. 1.000.000</td>
                  <td className={styles.Uang}>Rp. 14.000.000</td>
                  <td className={styles.Keterangan}>Membeli segala peralatan kebersihan masjid.</td>
                </tr>
                <tr>
                  <td className={styles.nomor}>2</td>
                  <td className={styles.HariTanggal}>06/09/2023</td>
                  <td className={styles.Uraian}>Peralatan Kebersihan</td>
                  <td className={styles.HariTanggal}>0</td>
                  <td className={styles.HariTanggal}>Rp. 1.000.000</td>
                  <td className={styles.HariTanggal}>Rp. 13.000.000</td>
                  <td className={styles.Keterangan}>Membeli segala peralatan kebersihan masjid.</td>
                </tr>
                <tr>
                  <td className={styles.nomor}>3</td>
                  <td className={styles.HariTanggal}>06/09/2023</td>
                  <td className={styles.Uraian}>Peralatan Kebersihan</td>
                  <td className={styles.HariTanggal}>0</td>
                  <td className={styles.HariTanggal}>Rp. 1.000.000</td>
                  <td className={styles.HariTanggal}>Rp. 12.000.000</td>
                  <td className={styles.Keterangan}>Membeli segala peralatan kebersihan masjid.</td>
                </tr>
                <tr>
                  <td className={styles.nomor}>4</td>
                  <td className={styles.HariTanggal}>06/09/2023</td>
                  <td className={styles.Uraian}>Peralatan Kebersihan</td>
                  <td className={styles.HariTanggal}>0</td>
                  <td className={styles.HariTanggal}>Rp. 1.000.000</td>
                  <td className={styles.HariTanggal}>Rp. 11.000.000</td>
                  <td className={styles.Keterangan}>Membeli segala peralatan kebersihan masjid.</td>
                </tr>
                <tr>
                  <td className={styles.nomor}>5</td>
                  <td className={styles.HariTanggal}>06/09/2023</td>
                  <td className={styles.Uraian}>Infaq Juma`at</td>
                  <td className={styles.Uang}>Rp. 2.000.000</td>
                  <td className={styles.Uang}>0</td>
                  <td className={styles.Uang}>Rp. 13.000.000</td>
                  <td className={styles.Keterangan}>Infaq dari Jamaah Shalat Jum`at.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.Acara}>
          <h1 className={styles.HeadingAcara}>Acara Masjid</h1>
          <div className={styles.KomponenAcara}>
            <div className={styles.CardAcara}>
              <img src="src/assets/ImageAcara/MaulidNabi.png" alt="poster" />
              <div className={styles.DescAcara}>
                  <div className={styles.Desc1}>
                      <p>18 Sep</p>
                  </div>
                  <div className={styles.Desc2}>
                      <p>Maulid Nabi</p>
                      <p>Masjid Al-Insan</p>
                      <p>Ayo saksikan momen bersejarah peringatan Maulid Nabi</p>
                  </div>
              </div>
            </div>
            <div className={styles.CardAcara}>
              <img src="src/assets/ImageAcara/MaulidNabi.png" alt="poster" />
              <div className={styles.DescAcara}>
                  <div className={styles.Desc1}>
                      <p>18 Sep</p>
                  </div>
                  <div className={styles.Desc2}>
                      <p>Maulid Nabi</p>
                      <p>Masjid Al-Insan</p>
                      <p>Ayo saksikan momen bersejarah peringatan Maulid Nabi</p>
                  </div>
              </div>
            </div>
            <div className={styles.CardAcara}>
              <img src="src/assets/ImageAcara/MaulidNabi.png" alt="poster" />
              <div className={styles.DescAcara}>
                  <div className={styles.Desc1}>
                      <p>18 Sep</p>
                  </div>
                  <div className={styles.Desc2}>
                      <p>Maulid Nabi</p>
                      <p>Masjid Al-Insan</p>
                      <p>Ayo saksikan momen bersejarah peringatan Maulid Nabi</p>
                  </div>
              </div>
            </div>
            <div className={styles.CardAcara}>
              <img src="src/assets/ImageAcara/MaulidNabi.png" alt="poster" />
              <div className={styles.DescAcara}>
                  <div className={styles.Desc1}>
                      <p>18 Sep</p>
                  </div>
                  <div className={styles.Desc2}>
                      <p>Maulid Nabi</p>
                      <p>Masjid Al-Insan</p>
                      <p>Ayo saksikan momen bersejarah peringatan Maulid Nabi</p>
                  </div>
              </div>
            </div>
            <div className={styles.CardAcara}>
              <img src="src/assets/ImageAcara/MaulidNabi.png" alt="poster" />
              <div className={styles.DescAcara}>
                  <div className={styles.Desc1}>
                      <p>18 Sep</p>
                  </div>
                  <div className={styles.Desc2}>
                      <p>Maulid Nabi</p>
                      <p>Masjid Al-Insan</p>
                      <p>Ayo saksikan momen bersejarah peringatan Maulid Nabi</p>
                  </div>
              </div>
            </div>
            <div className={styles.CardAcara}>
              <img src="src/assets/ImageAcara/MaulidNabi.png" alt="poster" />
              <div className={styles.DescAcara}>
                  <div className={styles.Desc1}>
                      <p>18 Sep</p>
                  </div>
                  <div className={styles.Desc2}>
                      <p>Maulid Nabi</p>
                      <p>Masjid Al-Insan</p>
                      <p>Ayo saksikan momen bersejarah peringatan Maulid Nabi</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InfoMasjid;