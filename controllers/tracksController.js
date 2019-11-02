const db=require('../helper/dbCon');
const tracksSchema = require('../models/tracksSchema');


exports.getAll = function(req, res){
    tracksSchema.find({}).then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:'Tüm Şarkılar',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Şarkılar getirilirken hata oluştu.',
            status:404
        })
    });
}

exports.getOne = function(req, res){
    const trackId = req.params.trackId
    tracksSchema.find({_id:trackId}).then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:data[0].trackName+' isimli Şarkı bilgileri',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Şarkı getirilirken hata oluştu.',
            status:404
        })
    });
}
exports.byArtist = function(req, res){
    const artistId = req.params.artistId
    tracksSchema.find({artistId:artistId}).then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:'Sanatçının Şarkıları',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Şarkı getirilirken hata oluştu.',
            status:404
        })
    });
}

exports.topbyArtist = function(req, res){
    const artistId = req.params.artistId
    tracksSchema.find({artistId:artistId}).sort({listenCount:-1}).then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:'Sanatçının Şarkıları',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Şarkı getirilirken hata oluştu.',
            status:404
        })
    });
}

exports.topbyAlbum = function(req, res){
    const albumId = req.params.albumId
    tracksSchema.find({albumId:albumId}).sort({listenCount:-1}).then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:'Sanatçının Şarkıları',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Şarkı getirilirken hata oluştu.',
            status:404
        })
    });
}
exports.byAlbum = function(req, res){
    const albumId = req.params.albumId
    tracksSchema.find({albumId:albumId}).then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:'Sanatçının Şarkıları',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Şarkı getirilirken hata oluştu.',
            status:404
        })
    });
}

exports.insertTrack = function(req, res){
    const trackName =   req.body.trackName
    const artistId  =   req.body.artistId
    const albumId   =   req.body.albumId
    const songTime  =   req.body.songTime

    const insertValue= new tracksSchema({
        trackName:trackName,
        albumId:albumId,
        artistId:artistId,
        songTime:songTime,
        listenCount:0,
        likeCount:0,
        downloadCount:0,
        shareCount:0
    })
    insertValue.save().then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:'Şarkı Eklendi.',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Şarkı eklenirken hata oluştu.',
            status:404
        })
    });
}

exports.updateTrack = function(req, res){
    const trackId = req.params.trackId;
    const listenCount = req.body.listenCount;
    const likeCount = req.body.likeCount;
    const downloadCount = req.body.downloadCount;
    const shareCount = req.body.shareCount;

    tracksSchema.update({_id:trackId},{listenCount:listenCount,likeCount:likeCount,downloadCount:downloadCount,shareCount:shareCount}).then(data=>{

        if(data.ok > 0){
            res.status(200).json({
                err:false,
                data:data,
                msg:'Şarkı İstatistkleri Güncellendi.',
                status:200
            })
        }
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Şarkı İstatistkleri güncellenirken hata oluştu.',
            status:404
        })
    });
}