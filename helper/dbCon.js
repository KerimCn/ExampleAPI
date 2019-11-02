var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kerimcn:Kerimcan123.@cluster0-swtwc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology:true })

var db=mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function () {
  console.log('MongoDB Connected!');
})

module.exports=db;
