import {Directive, ElementRef, HostBinding, Input} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[val-message]'
})
export class ValMessageDirective {
  @HostBinding('style.display') display = 'none';
  // tslint:disable-next-line:no-input-rename
  @Input('val-message') messageFor: string;
  @Input() useErrorValue = false;

  constructor(private el: ElementRef) { }

  show(message?: string) {
    if (this.useErrorValue) {
      const e: Element = this.el.nativeElement;
      e.textContent = message ? message : null;
    }

    this.display = 'block';
  }

  hide() {
    this.display = 'none';
  }
}
