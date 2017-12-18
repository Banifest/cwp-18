const FileLogger = require('./file-logger');
const fs = require("fs");
const Promise = require("bluebird");

class DeferredFileLogger extends FileLogger
{
    constructor(file, queueLength = 1, prefix, defaultLevel, dateFormat)
    {
        super(file, prefix, defaultLevel, dateFormat);
        this.queueLength = queueLength;
        this.queue = []
    }

    async log(message, level)
    {
        if(this.queue.length + 1 === this.queueLength)
        {
            this.queue.push(this.format(message, level));
            let temp = this.queue;
            this.queue = [];
            return Promise.map(temp, data => { this.file.write(data)})
        }
        else
        {
            return await this.queue.push(this.format(message, level));
        }
    }
}

module.exports = DeferredFileLogger;

console.log(new DeferredFileLogger('log.log', 2).log('heh'));