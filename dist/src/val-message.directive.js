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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ValMessageDirective = (function () {
    function ValMessageDirective(el) {
        this.el = el;
        this.display = 'none';
        this.useErrorValue = false;
    }
    ValMessageDirective.prototype.show = function (message) {
        if (this.useErrorValue) {
            var e = this.el.nativeElement;
            e.textContent = message ? message : null;
        }
        this.display = 'block';
    };
    ValMessageDirective.prototype.hide = function () {
        this.display = 'none';
    };
    return ValMessageDirective;
}());
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object)
], ValMessageDirective.prototype, "display", void 0);
__decorate([
    core_1.Input('val-message'),
    __metadata("design:type", String)
], ValMessageDirective.prototype, "messageFor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ValMessageDirective.prototype, "useErrorValue", void 0);
ValMessageDirective = __decorate([
    core_1.Directive({
        selector: '[val-message]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ValMessageDirective);
exports.ValMessageDirective = ValMessageDirective;
//# sourceMappingURL=val-message.directive.js.map