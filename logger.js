const {createLogger,transports,format} = require('winston')

const customformat=format.combine(format.timestamp(),format.printf((info )=>{
    return `  ${info.timestamp}   -   [${info.level}] -  ${info.message} `
}))
const logger = createLogger({
    format:customformat,
    transports:[
        new transports.Console(),
        new transports.File({filename:"app.logs"})
    ]
  
});

module.exports=logger;