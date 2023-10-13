import { LogLevel, Logger, LoggerService } from '@nestjs/common';

export class CustomLogger implements LoggerService {
  private prefix = CustomLogger.name;

  log(message: any, ...optionalParams: any[]) {
    if (!Logger.isLevelEnabled('log')) return;
    this._log('LOG', message, optionalParams);
  }

  error(message: any, ...optionalParams: any[]) {
    if (!Logger.isLevelEnabled('error')) return;
    this._log('ERROR', message, optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    if (!Logger.isLevelEnabled('warn')) return;
    this._log('WARN', message, optionalParams);
  }

  debug(message: any, ...optionalParams: any[]) {
    if (!Logger.isLevelEnabled('debug')) return;
    this._log('DEBUG', message, optionalParams);
  }

  verbose(message: any, ...optionalParams: any[]) {
    if (!Logger.isLevelEnabled('verbose')) return;
    this._log('VERBOSE', message, optionalParams);
  }

  setLogLevels(levels: LogLevel[]) {
    this.debug(`Setting log levels to ${levels.join(', ')}`);
  }

  private _log(level: string, message: any, optionalParams: any[]) {
    const { additionalData, context } = this.extractContext(optionalParams);

    const payload = JSON.stringify({
      context,
      level,
      message,
      additionalData
    });

    // eslint-disable-next-line no-console
    console.log(`[${this.prefix}] ${payload}`);
  }

  private extractContext(params: any[]): {
    additionalData: any[];
    context: string;
  } {
    const potentialContext = params.at(-1);

    if (typeof potentialContext === 'string') {
      return {
        additionalData: params.slice(0, -1),
        context: potentialContext
      };
    } else {
      return {
        additionalData: params,
        context: 'Unspecificed'
      };
    }
  }
}
