"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<ack-modal-layout *ngIf=\"!AckApp.fixedElementStage\" (close)=\"close.emit($event)\" [isModelMode]=\"isModelMode || showModelChange.observers.length\" [showModel]=\"showModel\" (showModelChange)=\"showModelChange.emit(showModel=$event)\" [backgroundColor]=\"backgroundColor\" [wrapStyle]=\"wrapStyle\" [wrapCellStyle]=\"wrapCellStyle\" [allowClose]=\"allowClose\"><ng-content></ng-content></ack-modal-layout>";
