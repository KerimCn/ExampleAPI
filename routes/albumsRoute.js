const express = require('express');
const router = express.Router();
const albumsController = require('../controllers/albumsController');

router.get('/',albumsController.getAll);
router.get('/byartist/:artistId',albumsController.getOne);
router.post('/add',albumsController.insertAlbum);



module.exports=router;