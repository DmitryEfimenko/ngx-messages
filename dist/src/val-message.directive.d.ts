import { ElementRef } from '@angular/core';
export declare class ValMessageDirective {
    private el;
    display: string;
    messageFor: string;
    useErrorValue: boolean;
    constructor(el: ElementRef);
    show(message?: string): void;
    hide(): void;
}
