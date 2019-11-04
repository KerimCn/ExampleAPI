const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./helper/swagger.json');

require('./helper/dbCon')
//Headers
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*'); // proda çıkarken burada sadece sitemizin domaini yer alacak. 
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-Wdith, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    };
    next();
});

//Body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Route Defined
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');
const tracksRoute = require('./routes/tracksRoute');
const albumsRoute = require('./routes/albumsRoute');
const artistRoute = require('./routes/artistRoute');



//App Defined
app.use('/category',categoryRoute);
app.use('/user',userRoute);
app.use('/tracks',tracksRoute);
app.use('/albums',albumsRoute);
app.use('/artist',artistRoute);

//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// error handler
app.use((req, res, next) => {
    const error = new Error('Hatalı erişim'+req);
    error.status = 404;
    next(error);
})



app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});




module.exports = app;