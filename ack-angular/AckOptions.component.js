"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pipes_class_1 = require("./pipes.class");
var core_1 = require("@angular/core");
var ack_options_pug_1 = require("./templates/ack-options.pug");
var AckOptions = (function () {
    function AckOptions() {
        this.array = [];
        this.stylize = true;
        this.multiple = false;
        this.toggleable = false; //multiple must be false
        this.modelChange = new core_1.EventEmitter();
        this.refChange = new core_1.EventEmitter();
    }
    AckOptions.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.ref = Object.assign(_this, _this.ref);
            _this.refChange.emit(_this.ref);
        }, 0);
    };
    AckOptions.prototype.selectItem = function (item) {
        var value = this.getArrayValue(item);
        if (this.multiple) {
            var modelIndex = this.modelIndex(item);
            if (modelIndex >= 0) {
                this.model.splice(modelIndex, 1);
            }
            else {
                this.model.push(value);
            }
        }
        else {
            if (this.toggleable && this.model == value) {
                this.model = null;
            }
            else {
                this.model = value;
            }
        }
        this.modelChange.emit(this.model);
    };
    AckOptions.prototype.getArrayValue = function (item) {
        if (!this.arrayKey)
            return item;
        var items = this.arrayKey.split('.');
        var scope = item;
        while (items.length) {
            if (scope == null)
                return null;
            scope = scope[items.shift()];
        }
        return scope;
    };
    AckOptions.prototype.modelIndex = function (item) {
        this.model = pipes_class_1.array(this.model);
        for (var i = this.model.length - 1; i >= 0; --i) {
            var value = this.getArrayValue(item);
            if (value == this.model[i])
                return i;
        }
        return -1;
    };
    AckOptions.prototype.getItemClass = function (item) {
        return {
            'cursor-pointer pad-h pad-v-sm border-grey-6x border-bottom': this.stylize,
            'bg-warning': this.stylize && this.modelIndex(item) >= 0,
            'hover-bg-grey-5x': this.stylize && this.modelIndex(item) < 0
        };
    };
    return AckOptions;
}());
AckOptions.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ack-options',
                template: ack_options_pug_1.string
            },] },
];
/** @nocollapse */
AckOptions.ctorParameters = function () { return []; };
AckOptions.propDecorators = {
    'array': [{ type: core_1.Input },],
    'stylize': [{ type: core_1.Input },],
    'multiple': [{ type: core_1.Input },],
    'toggleable': [{ type: core_1.Input },],
    'model': [{ type: core_1.Input },],
    'modelChange': [{ type: core_1.Output },],
    'templateRef': [{ type: core_1.ContentChild, args: [core_1.TemplateRef,] }, { type: core_1.Input },],
    'ref': [{ type: core_1.Input },],
    'refChange': [{ type: core_1.Output },],
    'arrayKey': [{ type: core_1.Input },],
};
exports.AckOptions = AckOptions;
//# sourceMappingURL=AckOptions.component.js.map