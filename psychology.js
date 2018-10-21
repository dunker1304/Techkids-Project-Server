const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const UserRouter= require('./modules/api/users/router');
const CategoryRouter= require('./modules/api/category/router');
const PostRouter = require('./modules/api/post/router');

const app = express();

app.get('/', (request,response)=>{
    response.send("Psychology");
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/user',UserRouter);
app.use('/api/category',CategoryRouter);
app.use('/api/post',PostRouter);

mongoose.connect('mongodb://localhost/tk_project', {useNewUrlParser: true},error=>{
    if(error) console.log(error);
    else console.log("Database connect success full")
})

const port =  process.env.PORT || 6969;
app.listen(port, error =>{
    if(error) console.log(error);
    else console.log("Server running at port: "+port);
})