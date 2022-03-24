const quizmodel=require("./quizmodel");

module.exports={
    CreateQuestion:function(Questionobj,cb){
        var question=new quizmodel(Questionobj);
        question.save(function(err,result)
        {
            cb(err,result);
        });
    },
    getallQuestions : function(query,cb){
        quizmodel.find(query,function(err,allquestions){
             cb(err,allquestions);
        }
        )
    },
    CreateManyquestions : function(Questiondetails, cb) {
        console.log("Inserting multiple items...");
        quizmodel.insertMany(Questiondetails, (err, data) => {
            if (err) console.log('ERROR ' + err);
            cb(err, data);
        })
    }
}