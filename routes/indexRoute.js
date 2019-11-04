const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile('doc.html',{ root: './public' });
});


module.exports=router;