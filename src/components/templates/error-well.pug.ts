export const string = "<div *ngIf=\"error!=null &amp;&amp; errorClose!=error\" [@200]=\"'fadeInUp'\"><div *ngIf=\"error &amp;&amp; closable\" (click)=\"errorClose=error\" style=\"position:relative;\"><div style=\"position:absolute;bottom:-17px;right:-16px;border:1px solid #DDD;border-radius:50%;z-index:20;\"><ack-close-icon></ack-close-icon></div></div><div class=\"pad-xxs\" *ngIf=\"error!=null &amp;&amp; errorClose!=error\" [@200]=\"'fadeInUp'\" [ngClass]=\"cssClasses\"><div class=\"flex-valign-center flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"strong text-3x margin-0\" [class.cursor-pointer]=\"allowDetails\" (click)=\"!allowDetails || moreDetails=!moreDetails\">{{ getErrorMessage(error) }}</div></div><a class=\"text-blue underline text-xs\" *ngIf=\"allowDetails &amp;&amp; error &amp;&amp; (error|typeof)!='string'\" (click)=\"moreDetails=!moreDetails\">details</a></div><div *ngIf=\"moreDetails\" [@200]=\"'fadeInUp'\"><absolute-overflow-x class=\"text-sm\"><pre class=\"margin-0 pad-xs\">{{ error|json }}</pre></absolute-overflow-x></div></div></div>"