const db=require('../helper/dbCon');
const albumsSchema = require('../models/albumsSchema');


exports.getAll = function(req, res){
    albumsSchema.find({}).then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:'Tüm Albümler',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Albümler getirilirken hata oluştu.',
            status:404
        })
    });
}

exports.getOne = function(req, res){
    const artistId = req.params.artistId
    albumsSchema.find({artistId:artistId}).then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:data[0].albumName+' isimli Albüm',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Albüm getirilirken hata oluştu.',
            status:404
        })
    });
}


exports.insertAlbum = function(req, res){
    const albumName = req.body.albumName
    const artistId= req.body.artistId
    const insertValue= new albumsSchema({
        albumName:albumName,
        artistId:artistId
    })
    insertValue.save().then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:'Albüm Eklendi.',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Albüm getirilirken hata oluştu.',
            status:404
        })
    });
}
