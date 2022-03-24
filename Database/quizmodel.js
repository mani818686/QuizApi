
const mongoose=require('mongoose');

var Quizmodel=new mongoose.Schema({
    level:Number,
    language:String,
    questionType:String,
    question:String,marks: Number,

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
    }, ],
    
})

module.exports=mongoose.model("Quizmodel",Quizmodel);