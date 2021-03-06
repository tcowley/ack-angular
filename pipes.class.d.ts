export declare function between(input: any, a: any, b: any): boolean;
export declare function numberToPhone(val: any): any;
export declare function toNumber(val: any): number;
export declare function numberSuffix(val: any, rtnVal?: boolean): string;
export declare function array(input: any, repeat?: number, repeatValue?: any): any;
export declare function arrayOfObjects(input: any, repeat?: number, repeatValue?: any): any;
export declare function markdownAnchor(input: string): string;
export declare function textDownload(input: any): any;
export declare function yesno(input: any): any;
export declare function yesNo(input: any): any;
export declare function boolean(input: any): boolean;
export declare function bit(input: any): 0 | 1;
export declare function numbers(input: any, safeChars?: string): any;
export declare function capitalizeWords(input: any): any;
export declare function capitalize(input: any): any;
export declare function capitalizeAfterSentence(input: any): any;
export declare function capitalizeOne(input: any): any;
export declare const aDate: (v: any, call0?: any, call1?: any, call2?: any) => any;
export declare const aTime: (v: any, call0?: any, call1?: any, call2?: any) => any;
export declare const aMath: (v: any, call0?: any, call1?: any, call2?: any) => any;
export declare const ack: (v: any, call0?: any, call1?: any, call2?: any) => any;
export declare const pipes: {
    array: (input: any, repeat?: number, repeatValue?: any) => any;
    markdownAnchor: (input: string) => string;
    textDownload: (input: any) => any;
    yesno: (input: any) => any;
    yesNo: (input: any) => any;
    numbers: (input: any, safeChars?: string) => any;
    capitalizeWords: (input: any) => any;
    capitalize: (input: any) => any;
    capitalizeAfterSentence: (input: any) => any;
    capitalizeOne: (input: any) => any;
    toNumber: (val: any) => number;
    numberToPhone: (val: any) => any;
    numberSuffix: (val: any, rtnVal?: boolean) => string;
    aDate: (v: any, call0?: any, call1?: any, call2?: any) => any;
    aMath: (v: any, call0?: any, call1?: any, call2?: any) => any;
    aTime: (v: any, call0?: any, call1?: any, call2?: any) => any;
    ack: (v: any, call0?: any, call1?: any, call2?: any) => any;
    between: (input: any, a: any, b: any) => boolean;
};
