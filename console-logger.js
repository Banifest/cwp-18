const Logger = require('logger');

class ConsoleLogger extends Logger
{
    constructor(prefix, defaultLevel, dateFormat)
    {
        super(prefix, defaultLevel, dateFormat);
    }

    format(message, level)
    {
        return `${moment().format(this.dateFormat)}|${this.prefix}|${message}`;
    }

    log(message, level)
    {
        switch (level)
        {
            case 'LOG':
                console.log(this.format(message, level));
                break;
            case 'INFO':
                console.info(this.format(message, level));
                break;
            case 'WARN':
                console.warn(this.format(message, level));
                break;
            case 'ERROR':
                console.error(this.format(message, level));
                break;
            default:
                this.log(this.defaultLevel);
        }
    }
}