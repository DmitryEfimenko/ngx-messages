"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var val_message_directive_1 = require("./val-message.directive");
var messages_configuration_1 = require("./messages-configuration");
var ValMessagesDirective = (function () {
    function ValMessagesDirective(cdr, config) {
        this.cdr = cdr;
        this.config = !config ? new messages_configuration_1.MessagesConfiguration() : config;
    }
    ValMessagesDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this._errorChildren.length === 0) {
            throw new Error('val-messages directive requires val-message directive inside');
        }
        if (!this.config.showErrorsOnlyIfInputDirty) {
            this.calculateMessagesVisibility();
        }
        this.control.statusChanges.subscribe(function () {
            _this.calculateMessagesVisibility();
        });
    };
    ValMessagesDirective.prototype.calculateMessagesVisibility = function () {
        var _this = this;
        if (this.control.invalid && this.control.errors) {
            var canShow = (this.config.showErrorsOnlyIfInputDirty && this.control.dirty) || true;
            if (canShow) {
                var errKeys_1 = Object.keys(this.control.errors);
                // var errDisplayed makes only one err show
                var errDisplayed_1 = false;
                this._errorChildren.forEach(function (message) {
                    if (!errDisplayed_1 && errKeys_1.indexOf(message.messageFor) > -1) {
                        message.show(message.useErrorValue ? _this.control.errors[message.messageFor] : undefined);
                        errDisplayed_1 = true;
                    }
                    else {
                        message.hide();
                    }
                });
            }
        }
        else {
            this._errorChildren.forEach(function (x) { return x.hide(); });
        }
        this.cdr.markForCheck();
    };
    return ValMessagesDirective;
}());
__decorate([
    core_1.Input('val-messages'),
    __metadata("design:type", forms_1.FormControl)
], ValMessagesDirective.prototype, "control", void 0);
__decorate([
    core_1.ContentChildren(val_message_directive_1.ValMessageDirective),
    __metadata("design:type", core_1.QueryList)
], ValMessagesDirective.prototype, "_errorChildren", void 0);
ValMessagesDirective = __decorate([
    core_1.Directive({
        selector: '[val-messages]'
    }),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, messages_configuration_1.MessagesConfiguration])
], ValMessagesDirective);
exports.ValMessagesDirective = ValMessagesDirective;
//# sourceMappingURL=val-messages.directive.js.map