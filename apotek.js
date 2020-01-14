const express   = require('express')
const app       = express()
require('./servers/db')

const index_routes = require('./routes/index')
const declare_stockObat = require('./routes/stockObat.routes')
const declare_pegawaiObat = require('./routes/pegawaiObat.routes')

app.use(express.urlencoded({ extended : true }))

app.use('/index', index_routes)
app.use('/obat', declare_stockObat)
app.use('/pegawai', declare_pegawaiObat)

app.listen(3100, () => {
    console.log('Example port to 3100')
})