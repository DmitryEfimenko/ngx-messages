import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValMessageDirective } from './val-message.directive';
import { ValMessagesDirective } from './val-messages.directive';
import { MessagesConfiguration, IMessagesConfiguration } from './messages-configuration';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
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
      providers: [
        {
          provide: MessagesConfiguration,
          useValue: config
        }
      ]
    };
  }
}
