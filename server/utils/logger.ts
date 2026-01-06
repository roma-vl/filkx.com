// Simple logger to avoid Nitro initialization issues with pino
export const logger = {
    info: (obj: any, msg?: string) => console.log(msg || '', JSON.stringify(obj)),
    warn: (obj: any, msg?: string) => console.warn(msg || '', JSON.stringify(obj)),
    error: (err: any, msg?: string) => console.error(msg || '', err)
}
