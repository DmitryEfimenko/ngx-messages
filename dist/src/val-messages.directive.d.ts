import { AfterContentInit, QueryList, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValMessageDirective } from './val-message.directive';
import { MessagesConfiguration } from './messages-configuration';
export declare class ValMessagesDirective implements AfterContentInit {
    private cdr;
    control: FormControl;
    _errorChildren: QueryList<ValMessageDirective>;
    config: MessagesConfiguration;
    constructor(cdr: ChangeDetectorRef, config: MessagesConfiguration);
    ngAfterContentInit(): void;
    private calculateMessagesVisibility();
}
