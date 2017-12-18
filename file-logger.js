const Logger = require('./logger');
const fs = require("fs");

class FileLogger extends Logger
{
    constructor(file = 'log.log', prefix, defaultLevel, dateFormat)
    {
        super(prefix, defaultLevel, dateFormat);
        this.file = file;

        this.file = typeof this.file === 'string'? fs.createWriteStream(this.file, {flags: 'a'}): this.file;
    }

    async log(message, level)
    {
        return await this.file.write(this.format(message, level) + '\n');
    }

    close()
    {
        this.file.close()
    }
}

module.exports = FileLogger;

console.log(new FileLogger().log('heh'));