const express = require('express');
// versi lama less than 4.16.0
// const bodyParser = require('body-parser');

const app = express();


//parse application/json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//panggil routers
var routes = require('./routes');
routes(app);


let port = 3000;
app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
});