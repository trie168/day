const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

let pegawaiObatSchema  = new Schema ({
    idPegawai   : Number,
    nama        : String,
    alamat      : String,
    jabatan     : String
})

let PegawaiObat = mongoose.model("PegawaiObat", pegawaiObatSchema)

module.exports = PegawaiObat