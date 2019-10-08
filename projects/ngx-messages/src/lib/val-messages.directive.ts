import { Directive, Input, Optional, AfterContentInit, ContentChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroupDirective, AbstractControl } from '@angular/forms';
import { ValMessageDirective } from './val-message.directive';
import { MessagesConfiguration } from './messages-configuration';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[val-messages]'
})
export class ValMessagesDirective implements AfterContentInit {
  // tslint:disable-next-line:no-input-rename
  private _control: AbstractControl;
  @Input('val-messages')
  set controlInput(c: FormControl | string) {
    this._control = c instanceof FormControl ? c : this.form.form.get(c);
    if (!this._control) {
      const controlName = c === null ? '' : c;
      throw new Error(`Could not find control ${controlName}`);
    }
  }

  @ContentChildren(ValMessageDirective) errorChildren: QueryList<ValMessageDirective>;
  config: MessagesConfiguration;

  constructor(
    private cdr: ChangeDetectorRef,
    @Optional() config: MessagesConfiguration,
    private form: FormGroupDirective
  ) {
    const defaults = new MessagesConfiguration();
    this.config = !config ? defaults : config;
    if (this.config.showErrorsOnlyIfInputDirty === undefined) {
      this.config.showErrorsOnlyIfInputDirty = config.showErrorsOnlyIfInputDirty;
    }
    if (this.config.showErrorsWhenFormSubmitted === undefined) {
      this.config.showErrorsWhenFormSubmitted = config.showErrorsWhenFormSubmitted;
    }
  }

  ngAfterContentInit() {
    if (this.errorChildren.length === 0) {
      throw new Error('val-messages directive requires val-message directive inside');
    }

    if (!this.config.showErrorsOnlyIfInputDirty) {
      this.calculateMessagesVisibility();
    }

    this._control.statusChanges.subscribe(() => {
      this.calculateMessagesVisibility();
    });

    if (this.config.showErrorsWhenFormSubmitted) {
      this.form.ngSubmit.subscribe(() => {
        this.calculateMessagesVisibility();
      });
    }
  }

  private calculateMessagesVisibility() {
    if (this._control.invalid && this._control.errors) {
      const canShow = (!this.config.showErrorsOnlyIfInputDirty || this._control.dirty)
        || (!this.config.showErrorsWhenFormSubmitted || this.form.submitted);

      if (canShow) {
        const errKeys = Object.keys(this._control.errors);
        // var errDisplayed makes only one err show
        let errDisplayed = false;
        this.errorChildren.forEach(message => {
          if (!errDisplayed && errKeys.indexOf(message.messageFor) > -1) {
            message.show(message.useErrorValue ? this._control.errors[message.messageFor] : undefined);
            errDisplayed = true;
          } else {
            message.hide();
          }
        });
      } else {
        this.errorChildren.forEach(x => x.hide());
      }
    } else {
      this.errorChildren.forEach(x => x.hide());
    }
    this.cdr.markForCheck();
  }
}
