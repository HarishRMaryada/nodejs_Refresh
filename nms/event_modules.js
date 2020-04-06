const Logger = require('../logger')
const logger = new Logger()

//Register a Listener 
logger.on('messageLogged',()=>{
    console.log("Listener Called")
})

logger.log('message')
