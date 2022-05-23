export interface IWindow extends Window {
    kommersant: {
        Notification: any,
        sendEvent: any,
        [key:string]: any,
    };
    __storage__: any,
    eventVar: Event,
    eventVar1: Event,
}