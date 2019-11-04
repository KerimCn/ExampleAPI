const db=require('../helper/dbCon');
const artistSchema = require('../models/artistSchema');


exports.getAll = function(req, res){
    artistSchema.find({}).then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:'Tüm Sanatçılar',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Sanatçılar getirilirken hata oluştu.',
            status:404
        })
    });
}

exports.getOne = function(req, res){
    const id = req.params.id
    artistSchema.find({_id:id}).then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:data[0].artistName+' isimli Sanatçı Bilgileri',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Sanatçı Bilgileri getirilirken hata oluştu.',
            status:404
        })
    });
}

exports.similarArtist = function(req, res){
    const artistId = req.params.artistId
    artistSchema.find({_id:artistId}).then(data=>{
       artistSchema.find({categoryId:data[0].categoryId}).then(similarArtistData=>{
        res.status(200).json({
            err:false,
            data:similarArtistData,
            msg:'Benzer Sanatçılar',
            status:200
        })
       }).catch(err=>{
           console.log(err)
        res.status(404).json({
            err:true,
            data:err,
            msg:'Benzer Sanatçıları Getirirken Problem Oluştu!',
            status:404
        })
       })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Sanatçı Bilgileri getirilirken hata oluştu.',
            status:404
        })
    });
}

exports.insertArtist = function(req, res){
    const name = req.body.artistName
    const birthDate = req.body.birthDate
    const categoryId = req.body.categoryId
    const insertValue= new artistSchema({
        artistName:name,
        birthDate:birthDate,
        categoryId:categoryId
    })
    insertValue.save().then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:'Sanatçı Eklendi.',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Sanatçı eklenirken hata oluştu.',
            status:404
        })
    });
}

exports.updateArtist = function(req, res){
    const artistId = req.params.artistId
    const artistName = req.body.artistName
    const birthDate = req.body.birthDate
    const categoryId = req.body.categoryId
    artistSchema.updateOne({_id:artistId},{artistName:artistName,birthDate:birthDate,categoryId:categoryId}).then(data=>{
        console.log(data)
        if(data.ok > 0){
            res.status(200).json({
                err:false,
                data:data,
                msg:'Sanatçı Güncellendi.',
                status:200
            })
        }
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Sanatçı güncellenirken hata oluştu.',
            status:404
        })
    });
}