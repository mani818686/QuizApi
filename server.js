const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const logger=require("./logger")
//const axios = require('axios');
const cors = require("cors");
const port = 5001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
var db=require('./Database/dbconnection');
var lib=require("./Database/questionlib")
db.connect()
app.listen(port, () => logger.info("Server started at port "+port));
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
        
        if(err)
            logger.error(`At GET API /questions/${req.params.language}/${req.params.level}`)
        else
        {
            logger.info(`Result of GET API /questions/${req.params.language}/${req.params.level} : ${result}`)
            //logger.info(`Result of GET of API /questions/language/level ${result}`)
            res.json({"questions":result})
        }
        
    })
})

app.post("/questions",(req,res)=>
{   logger.info(`Added question with the below data ${req.body}`);
    lib.CreateQuestion(req.body,function(err,result)
    {
        if(err)
            logger.error("At POST API /questions")
        res.json({"data":JSON.stringify(result)})
    })
})

app.post("/questions/multiple",(req,res)=>
{   logger.info(`Added questions with the below data ${req.body}`);
    lib.CreateManyquestions(req.body,function(err,result)
    {
        if(err)
            logger.error("At POST API /questions/multiple")
        else
            res.json({"data":JSON.stringify(result)})
        
    })
})


app.post('/log-client-errors', (req, res) => {

    // let error       = req.body.error.message;
    // let errorInfo   = req.body.error.stack;
    // send these errors to some service or to a logger (ex: winston)
    
    logger.info(req.body.a)
    //const b= JSON.parse(a);

   logger.info(`The app received a new client log: ${req.body.a.score}`);

    res.status(200)
});



