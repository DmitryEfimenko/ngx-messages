import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValMessageDirective } from './src/val-message.directive';
import { ValMessagesDirective } from './src/val-messages.directive';
import { MessagesConfiguration, IMessagesConfiguration } from './src/messages-configuration';

export * from './src/val-message.directive';
export * from './src/val-messages.directive';
export * from './src/messages-configuration';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ValMessageDirective,
    ValMessagesDirective
  ],
  exports: [
    ValMessageDirective,
    ValMessagesDirective
  ]
})
export class NgxMessagesModule {
  static configure(config: IMessagesConfiguration): ModuleWithProviders {
    return {
      ngModule: NgxMessagesModule,
      providers: [{
        provide: MessagesConfiguration,
        useValue: config
      }]
    };
  }
}
