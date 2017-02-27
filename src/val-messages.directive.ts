import { Directive, Input, Optional, AfterContentInit, ContentChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValMessageDirective } from './val-message.directive';
import { MessagesConfiguration } from './messages-configuration';

@Directive({
  selector: '[val-messages]'
})
export class ValMessagesDirective implements AfterContentInit {
  @Input('val-messages') control: FormControl;
  @ContentChildren(ValMessageDirective) _errorChildren: QueryList<ValMessageDirective>;
  config: MessagesConfiguration;

  constructor(private cdr: ChangeDetectorRef, @Optional() config: MessagesConfiguration) {
    this.config = !config ? new MessagesConfiguration() : config;
  }

  ngAfterContentInit() {
    if (this._errorChildren.length === 0) {
      throw new Error('val-messages directive requires val-message directive inside');
    }

    if (!this.config.showErrorsOnlyIfInputDirty) {
      this.calculateMessagesVisibility();
    }

    this.control.statusChanges.subscribe(s => {
      console.log('this.control.invalid', this.control.invalid, this.control.errors);
      this.calculateMessagesVisibility();
    });
  }

  private calculateMessagesVisibility() {
    if (this.control.invalid && this.control.errors) {
      const canShow = (this.config.showErrorsOnlyIfInputDirty && this.control.dirty) || true;
      if (canShow) {
        const errKeys = Object.keys(this.control.errors);
        // var errDisplayed makes only one err show
        let errDisplayed = false;
        this._errorChildren.forEach(message => {
          if (!errDisplayed && errKeys.indexOf(message.messageFor) > -1) {
            message.show(message.useErrorValue ? this.control.errors[message.messageFor] : undefined);
            errDisplayed = true;
          } else {
            message.hide();
          }
        });
      }
    } else {
      this._errorChildren.forEach(x => x.hide());
    }
    this.cdr.markForCheck();
  }
}
