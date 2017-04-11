"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var prefx_1 = require("./prefx");
var reader_header_body_pug_1 = require("./templates/reader-header-body.pug");
var error_well_pug_1 = require("./templates/error-well.pug");
var absolute_overflow_y_pug_1 = require("./templates/absolute-overflow-y.pug");
var ack_modal_pug_1 = require("./templates/ack-modal.pug");
var AckModal = (function () {
    function AckModal(element) {
        var _this = this;
        this.element = element;
        this.onClose = new core_1.EventEmitter();
        this.backgroundColorChange = new core_1.EventEmitter();
        //after possible double click, close on outside content click
        setTimeout(function () { return _this.clickListenForClose(); }, 400);
        element.nativeElement.style.position = 'fixed';
        element.nativeElement.style.top = 0;
        element.nativeElement.style.left = 0;
        element.nativeElement.style.zIndex = 20;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.width = '100%';
        element.nativeElement.style.overflow = 'auto';
        element.nativeElement.style.display = 'block';
    }
    AckModal.prototype.clickListenForClose = function () {
        var _this = this;
        this.element.nativeElement.addEventListener('click', function (event) {
            var eTar = event.srcElement || event.toElement || event.target;
            if (eTar == _this.element.nativeElement.children[0]) {
                _this.close();
            }
        });
    };
    AckModal.prototype.ngOnInit = function () {
        var _this = this;
        this.backgroundColor = this.backgroundColor || 'rgba(255,255,255,0.95)';
        setTimeout(function () { return _this.backgroundColorChange.emit(_this.backgroundColor); }, 0);
    };
    AckModal.prototype.close = function () {
        this.onClose.emit(this);
    };
    return AckModal;
}());
AckModal.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ack-modal',
                template: ack_modal_pug_1.string
            },] },
];
/** @nocollapse */
AckModal.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
AckModal.propDecorators = {
    'onClose': [{ type: core_1.Output },],
    'size': [{ type: core_1.Input },],
    'backgroundColor': [{ type: core_1.Input },],
    'backgroundColorChange': [{ type: core_1.Output },],
};
exports.AckModal = AckModal;
/** onEnterKey - on-enter-key attribute will be evaluated when element event onkeydown fires with enter-key */
var OnEnterKey = (function () {
    function OnEnterKey(element) {
        var _this = this;
        this.element = element;
        this.onEnterKey = new core_1.EventEmitter();
        element.nativeElement.addEventListener('keydown', function (event) {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) >= 0;
            if (yesNo) {
                _this.onEnterKey.emit(event);
            }
        });
    }
    return OnEnterKey;
}());
OnEnterKey.decorators = [
    { type: core_1.Directive, args: [{ selector: '[onEnterKey]' },] },
];
/** @nocollapse */
OnEnterKey.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
OnEnterKey.propDecorators = {
    'onEnterKey': [{ type: core_1.Output },],
};
exports.OnEnterKey = OnEnterKey;
/** Disallow keyboard access to the backspace key */
var PreventBackKey = (function () {
    function PreventBackKey(element) {
        var _this = this;
        this.element = element;
        this.preventBackKey = new core_1.EventEmitter();
        element.nativeElement.addEventListener('keydown', function (event) {
            var yesNo = [8].indexOf(event.which || event.keyCode) < 0;
            if (!yesNo) {
                _this.preventBackKey.emit(event);
                if (event.preventDefault) {
                    event.preventDefault();
                }
            }
            return yesNo;
        });
    }
    return PreventBackKey;
}());
PreventBackKey.decorators = [
    { type: core_1.Directive, args: [{ selector: '[preventBackKey]' },] },
];
/** @nocollapse */
PreventBackKey.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
PreventBackKey.propDecorators = {
    'preventBackKey': [{ type: core_1.Output },],
};
exports.PreventBackKey = PreventBackKey;
/** Disallow keyboard access to the enter keys */
var PreventEnterKey = (function () {
    function PreventEnterKey(element) {
        var _this = this;
        this.element = element;
        this.preventEnterKey = new core_1.EventEmitter();
        element.nativeElement.addEventListener('keydown', function (event) {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) < 0;
            if (!yesNo) {
                _this.preventEnterKey.emit(event);
                if (event.preventDefault) {
                    event.preventDefault();
                }
            }
            return yesNo;
        });
    }
    return PreventEnterKey;
}());
PreventEnterKey.decorators = [
    { type: core_1.Directive, args: [{ selector: '[preventEnterKey]' },] },
];
/** @nocollapse */
PreventEnterKey.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
PreventEnterKey.propDecorators = {
    'preventEnterKey': [{ type: core_1.Output },],
};
exports.PreventEnterKey = PreventEnterKey;
var InputHint = (function () {
    function InputHint() {
        this.hintStyle = { 'font-size': '75%', 'color': '#CCC' };
    }
    return InputHint;
}());
InputHint.decorators = [
    { type: core_1.Component, args: [{
                selector: 'input-hint',
                template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
            },] },
];
/** @nocollapse */
InputHint.ctorParameters = function () { return []; };
InputHint.propDecorators = {
    'hintStyle': [{ type: core_1.Input },],
};
exports.InputHint = InputHint;
var StatusOnlineModel = (function () {
    function StatusOnlineModel() {
        var _this = this;
        this.statusOnlineModelChange = new core_1.EventEmitter();
        this.onChange = function () {
            this.statusOnlineModel = navigator.onLine;
            this.statusOnlineModelChange.emit(this.statusOnlineModel);
        }.bind(this);
        window.addEventListener("online", this.onChange);
        window.addEventListener("offline", this.onChange);
        setTimeout(function () { return _this.onChange(); }, 0);
    }
    StatusOnlineModel.prototype.ngOnDestroy = function () {
        window.removeEventListener("online", this.onChange);
        window.removeEventListener("offline", this.onChange);
    };
    return StatusOnlineModel;
}());
StatusOnlineModel.decorators = [
    { type: core_1.Directive, args: [{ selector: '[statusOnlineModel]' },] },
];
/** @nocollapse */
StatusOnlineModel.ctorParameters = function () { return []; };
StatusOnlineModel.propDecorators = {
    'statusOnlineModel': [{ type: core_1.Input },],
    'statusOnlineModelChange': [{ type: core_1.Output },],
};
exports.StatusOnlineModel = StatusOnlineModel;
var StatusOfflineModel = (function () {
    function StatusOfflineModel() {
        var _this = this;
        this.statusOfflineModelChange = new core_1.EventEmitter();
        this.onChange = function () {
            this.statusOfflineModel = !navigator.onLine;
            this.statusOfflineModelChange.emit(this.statusOfflineModel);
        }.bind(this);
        window.addEventListener("offline", this.onChange);
        window.addEventListener("online", this.onChange);
        setTimeout(function () { return _this.onChange(); }, 0);
    }
    StatusOfflineModel.prototype.ngOnDestroy = function () {
        window.removeEventListener("offline", this.onChange);
        window.removeEventListener("online", this.onChange);
    };
    return StatusOfflineModel;
}());
StatusOfflineModel.decorators = [
    { type: core_1.Directive, args: [{ selector: '[statusOfflineModel]' },] },
];
/** @nocollapse */
StatusOfflineModel.ctorParameters = function () { return []; };
StatusOfflineModel.propDecorators = {
    'statusOfflineModel': [{ type: core_1.Input },],
    'statusOfflineModelChange': [{ type: core_1.Output },],
};
exports.StatusOfflineModel = StatusOfflineModel;
/** adds form element onchange listener via addEventListener('change') that calls onFormChanged scope argument */
var OnFormChanged = (function () {
    function OnFormChanged(element) {
        this.element = element;
        this.onFormChanged = new core_1.EventEmitter();
        this.onChange = function (event) {
            this.onFormChanged.emit(event);
        }.bind(this);
        element.nativeElement.addEventListener('change', this.onChange);
    }
    OnFormChanged.prototype.ngOnDestroy = function () {
        this.element.nativeElement.removeEventListener('change', this.onChange);
    };
    return OnFormChanged;
}());
OnFormChanged.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[onFormChanged]' //Also try : onFormAlter
            },] },
];
/** @nocollapse */
OnFormChanged.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
OnFormChanged.propDecorators = {
    'onFormChanged': [{ type: core_1.Output },],
};
exports.OnFormChanged = OnFormChanged;
var OnFormAlter = (function () {
    function OnFormAlter(element) {
        this.element = element;
        this.onFormAlter = new core_1.EventEmitter();
        this.onChange = function (event) {
            this.onFormAlter.emit(event);
        }.bind(this);
        element.nativeElement.addEventListener('input', this.onChange);
    }
    OnFormAlter.prototype.ngOnDestroy = function () {
        this.element.nativeElement.removeEventListener('input', this.onChange);
    };
    return OnFormAlter;
}());
OnFormAlter.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[onFormAlter]'
            },] },
];
/** @nocollapse */
OnFormAlter.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
OnFormAlter.propDecorators = {
    'onFormAlter': [{ type: core_1.Output },],
};
exports.OnFormAlter = OnFormAlter;
var ReaderHeaderBody = (function () {
    function ReaderHeaderBody() {
    }
    return ReaderHeaderBody;
}());
ReaderHeaderBody.decorators = [
    { type: core_1.Component, args: [{
                selector: 'reader-header-body',
                template: reader_header_body_pug_1.string
            },] },
];
/** @nocollapse */
ReaderHeaderBody.ctorParameters = function () { return []; };
exports.ReaderHeaderBody = ReaderHeaderBody;
var ReaderHeader = (function () {
    function ReaderHeader() {
    }
    return ReaderHeader;
}());
ReaderHeader.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'reader-header'
            },] },
];
/** @nocollapse */
ReaderHeader.ctorParameters = function () { return []; };
exports.ReaderHeader = ReaderHeader;
var ReaderBody = (function () {
    //-static parameters = [[ElementRef]]
    function ReaderBody(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
    return ReaderBody;
}());
ReaderBody.decorators = [
    { type: core_1.Directive, args: [{
                selector: "reader-body"
                //,parameters:[[ElementRef]]
            },] },
];
/** @nocollapse */
ReaderBody.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
exports.ReaderBody = ReaderBody;
var InnerHtmlModel = (function () {
    function InnerHtmlModel(element) {
        var _this = this;
        this.element = element;
        this.innerHtmlModelChange = new core_1.EventEmitter();
        this.observer = new MutationObserver(function () { return _this.setModel(); });
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
        //this.element.nativeElement.addEventListener("mouseup",()=>this.setModel())
        //this.element.nativeElement.addEventListener("keyup",()=>this.setModel())
    }
    InnerHtmlModel.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () { return _this.setModel(); }, 0);
    };
    InnerHtmlModel.prototype.setModel = function () {
        this.innerHtmlModel = this.element.nativeElement.innerHTML;
        this.innerHtmlModelChange.emit(this.innerHtmlModel);
    };
    InnerHtmlModel.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
    };
    return InnerHtmlModel;
}());
InnerHtmlModel.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[innerHtmlModel]'
            },] },
];
/** @nocollapse */
InnerHtmlModel.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
InnerHtmlModel.propDecorators = {
    'innerHtmlModel': [{ type: core_1.Input },],
    'innerHtmlModelChange': [{ type: core_1.Output },],
};
exports.InnerHtmlModel = InnerHtmlModel;
var ElementHeightModel = (function () {
    function ElementHeightModel(element) {
        var _this = this;
        this.element = element;
        this.elementHeightModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            this.setModel();
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.setModel(); }, 0);
        this.observer = new MutationObserver(function () {
            _this.setModel();
        });
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
    }
    ElementHeightModel.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () { return _this.setModel(); }, 0);
    };
    ElementHeightModel.prototype.setModel = function () {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        //this.element.nativeElement.style.border='1px solid red'
        this.elementHeightModelChange.emit(this.elementHeightModel);
    };
    ElementHeightModel.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
        window.removeEventListener(this.onResize);
    };
    return ElementHeightModel;
}());
ElementHeightModel.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[elementHeightModel]'
            },] },
];
/** @nocollapse */
ElementHeightModel.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
ElementHeightModel.propDecorators = {
    'elementHeightModel': [{ type: core_1.Input },],
    'elementHeightModelChange': [{ type: core_1.Output },],
};
exports.ElementHeightModel = ElementHeightModel;
var ElementWidthModel = (function () {
    function ElementWidthModel(element) {
        this.element = element;
        this.elementWidthModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            this.setModel();
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        this.setModel();
    }
    ElementWidthModel.prototype.ngOnChanges = function () {
        this.setModel();
    };
    ElementWidthModel.prototype.setModel = function () {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    };
    ElementWidthModel.prototype.ngOnDestroy = function () {
        window.removeEventListener(this.onResize);
    };
    return ElementWidthModel;
}());
ElementWidthModel.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[elementWidthModel]'
            },] },
];
/** @nocollapse */
ElementWidthModel.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
ElementWidthModel.propDecorators = {
    'elementWidthModel': [{ type: core_1.Input },],
    'elementWidthModelChange': [{ type: core_1.Output },],
};
exports.ElementWidthModel = ElementWidthModel;
var ScreenScrollModelY = (function () {
    function ScreenScrollModelY() {
        this.screenScrollModelYChange = new core_1.EventEmitter();
        this.onScroll = function () {
            this.screenScrollModelY = window['pageYOffset'];
            this.screenScrollModelYChange.emit(this.screenScrollModelY);
        }.bind(this);
        this.onScroll();
        window['addEventListener']("scroll", this.onScroll);
    }
    ScreenScrollModelY.prototype.ngOnDestroy = function () {
        window['removeEventListener']("scroll", this.onScroll);
    };
    return ScreenScrollModelY;
}());
ScreenScrollModelY.decorators = [
    { type: core_1.Directive, args: [{
                //inputs:['screen-height-model'],
                selector: '[screenScrollModelY]'
            },] },
];
/** @nocollapse */
ScreenScrollModelY.ctorParameters = function () { return []; };
ScreenScrollModelY.propDecorators = {
    'screenScrollModelY': [{ type: core_1.Input },],
    'screenScrollModelYChange': [{ type: core_1.Output },],
};
exports.ScreenScrollModelY = ScreenScrollModelY;
var ScreenWidthModel = (function () {
    function ScreenWidthModel() {
        var _this = this;
        this.screenWidthModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            if (this.screenWidthModel !== window.innerWidth) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.setModel(); }, 0);
    }
    ScreenWidthModel.prototype.setModel = function () {
        this.screenWidthModel = window.innerWidth;
        this.screenWidthModelChange.emit(this.screenWidthModel);
    };
    ScreenWidthModel.prototype.ngOnDestroy = function () {
        window.removeEventListener(this.onResize);
    };
    return ScreenWidthModel;
}());
ScreenWidthModel.decorators = [
    { type: core_1.Directive, args: [{
                //inputs:['screen-height-model'],
                selector: '[screenWidthModel]'
            },] },
];
/** @nocollapse */
ScreenWidthModel.ctorParameters = function () { return []; };
ScreenWidthModel.propDecorators = {
    'screenWidthModel': [{ type: core_1.Input },],
    'screenWidthModelChange': [{ type: core_1.Output },],
};
exports.ScreenWidthModel = ScreenWidthModel;
var ScreenHeightModel = (function () {
    function ScreenHeightModel() {
        var _this = this;
        this.screenHeightModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            if (this.screenHeightModel !== window.innerHeight) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.onResize(); }, 0);
    }
    ScreenHeightModel.prototype.setModel = function () {
        this.screenHeightModel = window.innerHeight;
        this.screenHeightModelChange.emit(this.screenHeightModel);
    };
    ScreenHeightModel.prototype.ngOnDestroy = function () {
        window.removeEventListener(this.onResize);
    };
    return ScreenHeightModel;
}());
ScreenHeightModel.decorators = [
    { type: core_1.Directive, args: [{
                //inputs:['screen-height-model'],
                selector: '[screenHeightModel]'
            },] },
];
/** @nocollapse */
ScreenHeightModel.ctorParameters = function () { return []; };
ScreenHeightModel.propDecorators = {
    'screenHeightModel': [{ type: core_1.Input },],
    'screenHeightModelChange': [{ type: core_1.Output },],
};
exports.ScreenHeightModel = ScreenHeightModel;
var AbsoluteOverflowY = (function () {
    function AbsoluteOverflowY() {
    }
    return AbsoluteOverflowY;
}());
AbsoluteOverflowY.decorators = [
    { type: core_1.Component, args: [{
                selector: 'absolute-overflow-y',
                template: absolute_overflow_y_pug_1.string
            },] },
];
/** @nocollapse */
AbsoluteOverflowY.ctorParameters = function () { return []; };
AbsoluteOverflowY.propDecorators = {
    'scrollBars': [{ type: core_1.Input },],
};
exports.AbsoluteOverflowY = AbsoluteOverflowY;
var ErrorWell = (function () {
    function ErrorWell() {
        this.message = 'Unexpected Error Occured';
    }
    ErrorWell.prototype.ngOnInit = function () {
        this.cssClasses = this.cssClasses || 'bg-danger border border-danger text-danger';
    };
    ErrorWell.prototype.getErrorMessage = function (error) {
        if (!error)
            return this.message;
        if (typeof error == 'string')
            return error;
        return error.message || error.statusText || this.message;
    };
    return ErrorWell;
}());
ErrorWell.decorators = [
    { type: core_1.Component, args: [{
                selector: 'error-well',
                template: error_well_pug_1.string,
                animations: prefx_1.fxArray
            },] },
];
/** @nocollapse */
ErrorWell.ctorParameters = function () { return []; };
ErrorWell.propDecorators = {
    'message': [{ type: core_1.Input },],
    'error': [{ type: core_1.Input },],
    'cssClasses': [{ type: core_1.Input },],
};
exports.ErrorWell = ErrorWell;
/** runs shake instructions when condition returns a truthy value */
var ShakeOn = (function () {
    function ShakeOn(element) {
        this.element = element;
        this.shakeThen = new core_1.EventEmitter();
        this.shakeForMsChange = new core_1.EventEmitter();
        this.shakeTypeChange = new core_1.EventEmitter();
        this.shakeRefChange = new core_1.EventEmitter();
        this.shakeTypes = ['shake-slow', 'shake-hard', 'shake-little', 'shake-horizontal', 'shake-vertical', 'shake-rotate', 'shake-opacity', 'shake-crazy'];
    }
    ShakeOn.prototype.ngAfterContentChecked = function () {
        var _this = this;
        setTimeout(function () { return _this.update(); }, 0);
    };
    ShakeOn.prototype.update = function () {
        this.shakeForMs = this.shakeForMs || 2000;
        this.shakeRef = this;
        this.shakeType = this.shakeType || 'shake-slow';
        this.shakeRefChange.emit(this.shakeRef);
        this.shakeTypeChange.emit(this.shakeType);
        this.shakeForMsChange.emit(this.shakeForMs);
    };
    ShakeOn.prototype.ngOnChanges = function (changes) {
        if (changes.shakeOn && changes.shakeOn.currentValue && changes.shakeOn.currentValue != changes.shakeOn.previousValue) {
            this.onTrue();
        }
    };
    ShakeOn.prototype.onFalse = function () {
        removeClass(this.element.nativeElement, 'shake-constant');
        removeClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    };
    ShakeOn.prototype.onTrue = function () {
        var _this = this;
        addClass(this.element.nativeElement, 'shake-constant');
        addClass(this.element.nativeElement, this.shakeType || 'shake-slow');
        setTimeout(function () {
            //$scope.shakeOnController.shakeOn = false
            _this.onFalse();
            _this.shakeThen.emit(_this);
        }, this.shakeForMs);
    };
    return ShakeOn;
}());
ShakeOn.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[shakeOn]'
            },] },
];
/** @nocollapse */
ShakeOn.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
ShakeOn.propDecorators = {
    'shakeOn': [{ type: core_1.Input },],
    'shakeThen': [{ type: core_1.Output },],
    'shakeForMs': [{ type: core_1.Input },],
    'shakeForMsChange': [{ type: core_1.Output },],
    'shakeType': [{ type: core_1.Input },],
    'shakeTypeChange': [{ type: core_1.Output },],
    'shakeRef': [{ type: core_1.Input },],
    'shakeRefChange': [{ type: core_1.Output },],
};
exports.ShakeOn = ShakeOn;
/** runs shake instructions when model changes to a truthy value */
//.directive('shakeModel', shakeModel)
/*
function shakeOnDirective($timeout) {
  return {
    restrict:'A',
    scope:{},
    bindToController:{
      shakeOn:'=?', shakeForMs:'=?', shakeType:'=?', shakeThen:'&', shakeRef:'=?'
    },
    controller:shakeOn,
    controllerAs:'shakeOnController',
    link: function($scope, element, attrs){}
  };
}
shakeOnDirective.$inject=['$timeout']
*/
/** runs shake instructions when model changes to a truthy value */
/*
function shakeModel($timeout) {
  return {
    restrict:'A',
    scope:{},
    bindToController:{
      shakeModel:'=?', shakeForMs:'=?', shakeType:'=?', shakeRef:'=?'
    },
    controller:shakeOn,
    controllerAs:'shakeModelController',
    link: function($scope, element, attrs) {
      $scope.shakeModelController.shakeForMs = $scope.shakeModelController.shakeForMs || 2000
      $scope.shakeModelController.shakeType = $scope.shakeModelController.shakeType || 'shake-slow'

      function onTrue(){
        element.addClass('shake-constant')
        element.addClass($scope.shakeModelController.shakeType)

        $timeout(function() {
          $scope.shakeModelController.shakeModel = false
          element.removeClass('shake-constant')
          element.removeClass($scope.shakeModelController.shakeType)
          $scope.$apply()
        }, $scope.shakeModelController.shakeForMs);
      }

      function onChange(value) {
        if(value) {
          onTrue()
        }else{
          element.removeClass('shake-constant')
          element.removeClass($scope.shakeModelController.shakeType)
        }
      }

      function watch(){
        return $scope.shakeModelController.shakeModel
      }

      $scope.$watch(watch, onChange);
    }
  };
}
shakeModel.$inject = ['$timeout']
*/
function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
exports.hasClass = hasClass;
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else if (!hasClass(el, className))
        el.className += " " + className;
}
exports.addClass = addClass;
function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}
exports.removeClass = removeClass;
exports.declarations = [
    //directives
    InnerHtmlModel,
    OnFormAlter,
    OnFormChanged,
    OnEnterKey,
    PreventBackKey,
    PreventEnterKey,
    ScreenScrollModelY,
    ScreenHeightModel,
    ScreenWidthModel,
    ShakeOn,
    StatusOnlineModel,
    StatusOfflineModel,
    ElementWidthModel,
    ElementHeightModel,
    //components
    ReaderHeaderBody,
    ReaderHeader,
    ReaderBody,
    ErrorWell,
    AbsoluteOverflowY,
    InputHint,
    AckModal
];
//# sourceMappingURL=components.js.map