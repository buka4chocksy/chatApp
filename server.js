const express = require('express');
const morgan = require('morgan')
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router()
const rootRouter = require('./app/routes/index')(router)
const DBConfig = require('./app/config/DB')

//MiddleWare
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors())
app.use('/api', rootRouter)

app.get('/', function(req, res){
    res.json({message:"hello world"});
});

DBConfig()
if(app.listen(process.env.APP_PORT)){
    console.log(`server is listening at port ${process.env.APP_PORT}`)
}else{
    console.log("An error occured");
}
