
const ModalAcara = () => {
  return (
    <>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Tambah Acara
        </button>
 
        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Form Acara</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="form-group row">
                        <label className="col-4 col-form-label">Nama Acara</label> 
                        <div className="col-8">
                        <input id="namaAcara" name="namaAcara" type="text" className="form-control" required="required"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-4 col-form-label">Poster</label> 
                        <div className="col-8">
                        <input id="poster" name="poster" type="file" accept=".png,.jpg" className="form-control" required="required"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-4 col-form-label">Tagline</label> 
                        <div className="col-8">
                        <input id="tagline" name="tagline" type="text" className="form-control" required="required"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-4 col-form-label">Pilih Tanggal</label> 
                        <div className="col-8">
                        <input id="tanggal" name="tanggal" type="date" className="form-control" required="required"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-4 col-form-label">Pilih Jam</label> 
                        <div className="col-8">
                        <input id="tanggal" name="tanggal" type="time" className="form-control" required="required"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-4 col-form-label">Deskripsi</label> 
                        <div className="col-8">
                        <input id="deskripsi" name="deskripsi" type="text" className="form-control" required="required"/>
                        </div>
                    </div> 
            </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModalAcara