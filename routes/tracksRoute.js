const express = require('express');
const router = express.Router();
const tracksController = require('../controllers/tracksController');

router.get('/',tracksController.getAll);
router.get('/id/:trackId',tracksController.getOne);
router.get('/byartist/:artistId',tracksController.byArtist);
router.get('/byalbum/:albumId',tracksController.byAlbum);
router.get('/topbyartist/:artistId',tracksController.topbyArtist);
router.get('/topbyalbums/:albumId',tracksController.topbyAlbum);
router.post('/add',tracksController.insertTrack);
router.patch('/update/:trackId',tracksController.updateTrack);



module.exports=router;