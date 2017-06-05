import { TemplateRef, EventEmitter } from "@angular/core";
export declare class AckOptions {
    array: any[];
    stylize: boolean;
    multiple: boolean;
    toggleable: boolean;
    model: any;
    modelChange: EventEmitter<{}>;
    templateRef: TemplateRef<any>;
    private ref;
    refChange: EventEmitter<{}>;
    arrayKey: string;
    ngOnInit(): void;
    selectItem(item: any): void;
    getArrayValue(item: any): any;
    modelIndex(item: any): number;
    getItemClass(item: any): {
        'cursor-pointer pad-h pad-v-sm border-grey-6x border-bottom': boolean;
        'bg-warning': boolean;
        'hover-bg-grey-5x': boolean;
    };
}