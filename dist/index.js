"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var val_message_directive_1 = require("./src/val-message.directive");
var val_messages_directive_1 = require("./src/val-messages.directive");
var messages_configuration_1 = require("./src/messages-configuration");
__export(require("./src/val-message.directive"));
__export(require("./src/val-messages.directive"));
__export(require("./src/messages-configuration"));
var NgxMessagesModule = NgxMessagesModule_1 = (function () {
    function NgxMessagesModule() {
    }
    NgxMessagesModule.configure = function (config) {
        return {
            ngModule: NgxMessagesModule_1,
            providers: [{
                    provide: messages_configuration_1.MessagesConfiguration,
                    useValue: config
                }]
        };
    };
    return NgxMessagesModule;
}());
NgxMessagesModule = NgxMessagesModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            val_message_directive_1.ValMessageDirective,
            val_messages_directive_1.ValMessagesDirective
        ],
        exports: [
            val_message_directive_1.ValMessageDirective,
            val_messages_directive_1.ValMessagesDirective
        ]
    })
], NgxMessagesModule);
exports.NgxMessagesModule = NgxMessagesModule;
var NgxMessagesModule_1;
//# sourceMappingURL=index.js.map