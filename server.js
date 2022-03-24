const express = require('express')
const app = express();
const bodyParser = require("body-parser");
//const axios = require('axios');
const port = 5001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var db=require('./Database/dbconnection');
var lib=require("./Database/questionlib")
db.connect()
app.listen(port, () => console.log("Server started"));
// app.get('/abc',(req,res)=>
// {   const url='https://jsonplaceholder.typicode.com/posts';
//     axios.get(url)
//     .then(function(response){
//       console.log(response.data);
//       res.json({"data":JSON.stringify(response.data)})
//     })
// })


app.get("/questions/:language/:level",(req,res)=>
{
    lib.getallQuestions({"language":req.params.language,"level":req.params.level},function(err,result)
    {
        //console.log(result);
        res.json({"questions":result})
    })
})

app.post("/questions",(req,res)=>
{   console.log(req.body);
    lib.CreateQuestion(req.body,function(err,result)
    {
        res.json({"data":JSON.stringify(result)})
    })
})
app.post("/questions/multiple",(req,res)=>
{   console.log(req.body);
    lib.CreateManyquestions(req.body,function(err,result)
    {
        res.json({"data":JSON.stringify(result)})
    })
})



