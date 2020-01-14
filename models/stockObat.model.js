const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

let stockObatSchema  = new Schema ({
    kodeObat    : Number,
    namaObat    : String,
    stok        : Number,
    supplier    : String
})

let StockObat = mongoose.model("StockObat", stockObatSchema)

module.exports = StockObat