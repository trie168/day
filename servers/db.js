const mongoose  = require("mongoose")
var host        = "mongodb://localhost:27017/day6"

mongoose.connect(host, {
    'userNewUrlParser' : true
})

mongoose.set('useCreateIndex', true)