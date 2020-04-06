const EventEmitter = require('events')


class Logger extends EventEmitter{
    log(message) {
        //send http request
        console.log(message)

        //Raise an event
        this.emit('messageLogged')
    }
}

module.exports = Logger