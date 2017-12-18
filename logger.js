const moment = require('moment');

class Logger
{
    constructor(prefix, defaultLevel, dateFormat)
    {
        this.prefix = prefix ? prefix : 'without-prefix';
        this.defaultLevel = defaultLevel ? defaultLevel : 'INFO';
        this.dateFormat = dateFormat ? dateFormat : "YYYY-MM-DD";
    }

    format(message, level)
    {
            return `${moment().format(this.dateFormat)}|${this.prefix}|${level? level: this.defaultLevel}|${message}`;
    }
}

module.exports = Logger;