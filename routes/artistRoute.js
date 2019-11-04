const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

router.get('/',artistController.getAll);
router.get('/id/:id',artistController.getOne);
router.get('/similarartist/:artistId',artistController.similarArtist);
router.post('/add',artistController.insertArtist);
router.patch('/update/:artistId',artistController.updateArtist);



module.exports=router;