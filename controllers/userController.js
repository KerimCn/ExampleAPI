const db=require('../helper/dbCon');
const categorySchema = require('../models/userSchema');


exports.getAll = function(req, res){
    categorySchema.find({}).then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:'Tüm Kategoriler',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Kategoriler getirilirken hata oluştu.',
            status:404
        })
    });
}

exports.getOne = function(req, res){
    const name = req.params.name
    categorySchema.find({catName:name}).then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:name+' isimli Kategori',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Kategori getirilirken hata oluştu.',
            status:404
        })
    });
}

exports.insertCategory = function(req, res){
    const name = req.body.name
    const insertValue= new categorySchema({
        categoryName:name
    })
    insertValue.save().then(data=>{
        console.log(data)
        res.status(200).json({
            err:false,
            data:data,
            msg:'Kategori Eklendi.',
            status:200
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Kategori getirilirken hata oluştu.',
            status:404
        })
    });
}

exports.updateCategory = function(req, res){
    const name = req.body.name;
    const id = req.params.id;
    categorySchema.update({_id:id},{categoryName:name}).then(data=>{

        if(data.ok > 0){
            res.status(200).json({
                err:false,
                data:data,
                msg:'Kategori Güncellendi.',
                status:200
            })
        }
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            err:true,
            data:err,
            msg:'Kategori getirilirken hata oluştu.',
            status:404
        })
    });
}