const express   = require('express')
const router    = express.Router()
const stockObatModel = require('../models/stockObat.model')


kodeObat    = Number,
namaObat    = String,
stok        = Number,
supplier    = String

router.post('/create', async (req, res) => {
    let { kodeObat, namaObat, stok, supplier } = req.body
    let inputData = {
        kodeObat, namaObat, stok, supplier
    }

    let data = new stockObatModel(inputData)
    data.save()

    return res.send({
        status: "Success",
        message: "Berhasil membuat informasi stok obat",
        data 
        })
})

router.get('/getAll', async(req,res) => {
    let result = await stockObatModel.find({}).exec()

    res.send({
        status: 'Success',
        message: 'Daftar stok obat saat ini',
        result
    })
})

router.get('/:id', async(req,res) => {
    let { id } = req.params
    let data = await stockObatModel.findOne({ _id:id}).exec()

    return res.send({
        status: 'Success',
        message: 'Obat yang kamu cari',
        data
        })
})

router.put('/:id', async (req, res) => {
    let { id } = req.params
    let {
        kodeObat, namaObat, stok, supplier
    } = req.body

    let updateData = {
        kodeObat, namaObat, stok, supplier
    }

    try{
        let data = await stockObatModel.findByIdAndUpdate(id, updateData).exec()

        return res.status(200).json({
            status: 'Success',
            message: 'Informasi stok obat telah diperbarui',
            data
        })
    } catch(err){
        return res.status(400).json({
            status: 'Error',
            message: err.message
        })
    }
})

router.delete('/:id', async (req, res) => {
    let { id } = req.params
    let query = await stockObatModel.findByIdAndDelete({_id:id}).exec()

    return res.status(200).json({
        status: 'Success',
        message: 'Informasi stok obat telah dihapus',
        query
    })

})

module.exports = router