
const mongoose=require('mongoose');

var Quizmodel=new mongoose.Schema({
    level:Number,
    language:String,
    questionType:String,
    question:String,
    options:[{
        text: {
            type: String,
            required: true,
        },
    }, ],
    answers:[{
        text: {
            type: String,
            required: true,
        },
    }, ]
});

module.exports=mongoose.model("Quizmodel",Quizmodel);