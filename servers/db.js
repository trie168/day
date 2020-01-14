const mongoose  = require("mongoose")
var host        = "mongodb://localhost:27017/apotek"

mongoose.connect(host, {
    'userNewUrlParser' : true
})

mongoose.set('useCreateIndex', true)