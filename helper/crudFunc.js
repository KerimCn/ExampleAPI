
module.exports.getAll = (table, res)=>{

    console.log('BURDA')
    table.find({id:1}).then(data=>{
        console.log(data)
        res.status(200).json({
            data:data
        })
    }).catch(err=>{
        console.log(err);
        res.status(404).json({
            data:err
        })
    });

}