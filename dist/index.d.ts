import { ModuleWithProviders } from '@angular/core';
import { IMessagesConfiguration } from './src/messages-configuration';
export * from './src/val-message.directive';
export * from './src/val-messages.directive';
export * from './src/messages-configuration';
export declare class NgxMessagesModule {
    static configure(config: IMessagesConfiguration): ModuleWithProviders;
}
