import { EventEmitter } from "@angular/core";
import { RouteWatchReporter } from "./RouteWatchReporter";
export declare class RouteReporter {
    RouteWatchReporter: RouteWatchReporter;
    $document: any;
    $scope: any;
    static parameters: typeof RouteWatchReporter[][];
    docCallbacks: any;
    querySub: any;
    stateChanger: EventEmitter<{}>;
    beforeChanger: EventEmitter<{}>;
    onLoad: any;
    ref: any;
    refChange: EventEmitter<{}>;
    stateName: string;
    stateNameChange: EventEmitter<any>;
    params: any;
    paramsChange: EventEmitter<any>;
    data: any;
    dataChange: EventEmitter<any>;
    query: any;
    queryChange: EventEmitter<any>;
    state: any;
    stateChange: EventEmitter<any>;
    constructor(RouteWatchReporter: RouteWatchReporter);
    ngOnInit(): void;
    ngOnDestroy(): void;
    emit(): void;
    goBackTo(name: any, params: any): void;
    tryBack(name: any, params: any): void;
}