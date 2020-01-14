const express   = require('express')
const router    = express.Router()
const pegawaiObatModel = require('../models/pegawaiObat.model')

router.post('/create', async (req, res) => {
    let { idPegawai, nama, alamat, jabatan } = req.body
    let inputData = {
        idPegawai, nama, alamat, jabatan
    }

    let data = new pegawaiObatModel(inputData)
    data.save()

    return res.send({
        status: "Success",
        message: "Berhasil membuat informasi pegwawai",
        data 
        })
})

router.get('/getAll', async(req,res) => {
    let result = await pegawaiObatModel.find({}).exec()

    res.send({
        status: 'Success',
        message: 'Daftar informasi pegawai saat ini',
        result
    })
})

router.get('/:id', async(req,res) => {
    let { id } = req.params
    let data = await pegawaiObatModel.findOne({ _id:id}).exec()

    return res.send({
        status: 'Success',
        message: 'Pegawai yang kamu cari',
        data
        })
})

router.put('/:id', async (req, res) => {
    let { id } = req.params
    let {
        idPegawai, nama, alamat, jabatan
    } = req.body

    let updateData = {
        idPegawai, nama, alamat, jabatan
    }

    try{
        let data = await pegawaiObatModel.findByIdAndUpdate(id, updateData)

        return res.status(200).json({
            status: 'Success',
            message: 'Informasi pegawai telah diperbarui',
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
    let query = await pegawaiObatModel.findByIdAndDelete({_id:id}).exec()

    return res.status(200).json({
        status: 'Success',
        message: 'Informasi pegwawai telah dihapus',
        query
    })

})

module.exports = router