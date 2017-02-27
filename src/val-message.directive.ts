import {Directive, ElementRef, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[val-message]'
})
export class ValMessageDirective {
  @HostBinding('style.display') display = 'none';
  @Input('val-message') messageFor: string;
  @Input() useErrorValue = false;

  constructor(private el: ElementRef) { }

  show(message?: string) {
    if (this.useErrorValue) {
      const e: Element = this.el.nativeElement;
      e.textContent = message;
    }

    this.display = 'block';
  }

  hide() {
    this.display = 'none';
  }
}
