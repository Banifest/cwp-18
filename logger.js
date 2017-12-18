const moment = require('moment');

class Logger
{
    constructor(prefix = 'without-prefix', defaultLevel = 'INFO', dateFormat = "YYYY-MM-DD")
    {
        this.prefix = prefix;
        this.defaultLevel = defaultLevel;
        this.dateFormat = dateFormat;
    }

    format(message, level)
    {
            return `${moment().format(this.dateFormat)}|${this.prefix}|${level? level: this.defaultLevel}|${message}`;
    }
}

module.exports = Logger;