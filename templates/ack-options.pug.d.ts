export declare const string = "<div [ngClass]=\"{'border-grey-6x border-top':stylize}\"></div><div *ngFor=\"let item of array|array\" (click)=\"selectItem(item)\" [ngClass]=\"{'cursor-pointer pad-h pad-v-sm border-grey-6x border-bottom':stylize, 'bg-warning':stylize&amp;&amp;modelIndex(item)&gt;=0, 'hover-bg-grey-5x':stylize&amp;&amp;modelIndex(item)&lt;0}\"><ng-template *ngIf=\"templateRef\" [ngTemplateOutlet]=\"templateRef\" [ngOutletContext]=\"{item:item}\"></ng-template><span *ngIf=\"!templateRef\">{{ item }}</span></div>";