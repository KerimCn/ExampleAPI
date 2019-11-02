const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

router.get('/',artistController.getAll);
router.get('/id/:id',artistController.getOne);
router.get('/similarartist/:artistId',artistController.similarArtist);
router.post('/add',artistController.insertArtist);
router.patch('/update/:id',artistController.updateArtist);



module.exports=router;