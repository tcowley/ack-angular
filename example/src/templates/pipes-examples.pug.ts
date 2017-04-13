export const string = "<p class=\"text-sm text-grey-2x\">Decorate and filter output via Pipes</p><p class=\"margin-bottom-0\">Import Example</p><div class=\"pad-h text-warning text-xs\">The following import code, is NOT needed if you used the AckModule import <a class=\"text-calm\" href=\"#/overview\" (click)=\"scrollToModuleImport()\">seen here</a></div><pre class=\"code-sample\">import &#123; NgModule &#125; from '@angular/core'"+
"\nimport &#123; AppComponent &#125; from './SomeRandomComponent'"+
"\n"+
"\nimport * as ackPipes from 'ack-angular/pipes'"+
"\n"+
"\n@NgModule(&#123;"+
"\n  declarations : [ AppComponent, ...ackPipes.declarations ]"+
"\n&#125;) export class AppModule &#123;&#125;"+
"\n</pre><br/><h3 id=\"Documentation\">Documentation</h3><div class=\"flex-wrap child-margin-xxs no-scroll-bars-ever\"><div class=\"flex3 border-grey-6x border width-full\"><div class=\"pad-h\"><h3>textDownload &amp; safeUrl</h3><p class=\"text-sm text-grey-2x\">Cast string to a data:text/plain uri</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewSafeUrl=!viewSafeUrl\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewSafeUrl\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">&lt;a [href]=\"'Usage Examples' | textDownload | safeUrl\" download=\"download.txt\"&gt;"+
"\n  download"+
"\n&lt;/a&gt;</span><span class=\"pad-h\">== <a [href]=\"'Usage Examples' | textDownload | safeUrl\" download=\"download.txt\">download</a></span></pre></absolute-overflow-y></div></div><div class=\"flex2 border-grey-6x border width-full\"><div class=\"pad-h\"><h3>safeStyle</h3><p class=\"text-sm text-grey-2x\">Cast string to safe style</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewSafeStyle=!viewSafeStyle\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewSafeStyle\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">&lt;span [ngStyle]=\"&#123;'...':('...'|safeStyle)&#125;\"&gt;"+
"\n  trusted style"+
"\n&lt;/span&gt;</span><span class=\"pad-h\">== <span [ngStyle]=\"{'...':('...'|safeStyle)}\">safe styled</span></span></pre></absolute-overflow-y></div></div><div class=\"flex3 border-grey-6x border width-full\"><div class=\"pad-h\"><h3>safeHtml</h3><p class=\"text-sm text-grey-2x\">Cast string to safe html</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewSafeHtml=!viewSafeHtml\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewSafeHtml\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">&lt;span class=\"safeHtml\" [innerHtml]=\"'&lt;style&gt;.safeHtml&#123;border:1px solid purple&#125;.safeHtml::before&#123;content:\\\"trusted html\\\"&#125;&lt;/style&gt;'|safeHtml\"&gt;"+
"\n  untrusted html"+
"\n&lt;/span&gt;</span><span class=\"pad-h\">==&nbsp;</span><span class=\"safeHtml\" [innerHtml]=\"'&lt;style&gt;.safeHtml{border:1px solid purple}.safeHtml::before{content:\&quot;trusted html\&quot;}&lt;/style&gt;'|safeHtml\">untrusted html</span></pre></absolute-overflow-y></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>markdownAnchor</h3><p class=\"text-sm text-grey-2x\">Cast string to a github markdown #anchor</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewMarkdownAnchor=!viewMarkdownAnchor\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewMarkdownAnchor\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 'Usage Examples' | markdownAnchor }}</span><span class=\"pad-h\">== {{ 'Usage Examples' | markdownAnchor }}</span></pre></absolute-overflow-y></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>typeof</h3><p class=\"text-sm text-grey-2x\">Result of native javascript typeof</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewTypeof=!viewTypeof\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewTypeof\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | typeof }}</span><span class=\"pad-h\">== {{ 0 | typeof }}</span></pre></absolute-overflow-y></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>indexTrack</h3><p class=\"text-sm text-grey-2x\">Force ngFor into trackBy index</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewIndexOf=!viewIndexOf\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewIndexOf\" [@500]=\"'fadeInUp'\"><div class=\"pad-xs text-info text-sm\">Simple arrays like [\"a\",\"b\",\"c\"] are hard to work with ngFor + ngModel</div><strong>With indexTrack</strong><div *ngFor=\"let item of simpleArray; let i=index; trackBy:0|indexTrack\"><input class=\"width-full\" [(ngModel)]=\"simpleArray[i]\"/></div><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div *ngFor=\"let item of simpleArray; let i=index; trackBy:0|indexTrack\"&gt;"+
"\n  &lt;input [(ngModel)]=\"simpleArray[i]\" /&gt;"+
"\n&lt;/div&gt;</pre></absolute-overflow-y><br/><strong class=\"text-warning\">Without indexTrack</strong><div class=\"text-xs text-grey-2x pad-left-xs\">Inputs blur as you type in them</div><div *ngFor=\"let item of simpleArray; let i=index; trackBy:index\"><input class=\"width-full\" [(ngModel)]=\"simpleArray[i]\"/></div></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>array : repeat : repeatValue</h3><p class=\"text-sm text-grey-2x\">Force any variable to array</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewArray=!viewArray\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewArray\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 'a' | array }}</span><span class=\"pad-h\">== {{ 'a' | array | stringify }}</span><br/><span ngNonBindable=\"ngNonBindable\">{{ 'a' | array:3 }}</span><span class=\"pad-h\">== {{ 'a' | array:3 | stringify }}</span><br/><span ngNonBindable=\"ngNonBindable\">{{ ['a'] | array:3:1 }}</span><span class=\"pad-h\">== {{ ['a'] | array:3:1 | stringify }}</span><br/><span ngNonBindable=\"ngNonBindable\">{{ 'a' | array:3:1 }}</span><span class=\"pad-h\">== {{ 'a' | array:3:1 | stringify }}</span></pre></absolute-overflow-y></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>console</h3><p class=\"text-sm text-grey-2x\">console log result of native console.log() function</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewConsole=!viewConsole\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewConsole\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'message1' | console : 'message2' }}"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex3 border-grey-6x border\"><div class=\"pad-h\"><h3>capitalize</h3><p class=\"text-sm text-grey-2x\">Each sentence leading word is capitalized</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewCapitalize=!viewCapitalize\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewCapitalize\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'how do you do?' | capitalize }} == How do you do?"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>capitalizeWords</h3><p class=\"text-sm text-grey-2x\">Every word is capitalized</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewCapitalizeWords=!viewCapitalizeWords\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewCapitalizeWords\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'how do you do?' | capitalizeWords }} == How Do You Do?"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>yesno</h3><p class=\"text-sm text-grey-2x\">Truthy value converts to: yes. Otherwise: no</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewYesno=!viewYesno\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewYesno\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'true' | yesno }} == yes"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>YesNo</h3><p class=\"text-sm text-grey-2x\">Truthy value converts to: Yes. Otherwise: No</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewYesNo=!viewYesNo\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewYesNo\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 1 | YesNo }} == Yes"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>numbers</h3><p class=\"text-sm text-grey-2x\">Removes anything not a number from a string</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewNumbers=!viewNumbers\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewNumbers\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'sam123acb456xyz' | numbers }} == 123456"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>keys</h3><p class=\"text-sm text-grey-2x\">List of keys for an Object</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewKeys=!viewKeys\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewKeys\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ {x:1,y:2,z:3} | keys }}</span><span class=\"pad-h-sm\">==</span><span>{{ {x:1,y:2,z:3} | keys | ack:['stringify',0] }}</span></pre></absolute-overflow-y></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>aDate</h3><p class=\"text-sm text-grey-2x\">A different approach @ date decorating</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewADate=!viewADate\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewADate\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | aDate:'now':'date' }}</span><span class=\"pad-h-sm\">==</span><span>{{ 0 | aDate:'now':'date':'getTime' }}</span></pre></absolute-overflow-y></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>aTime</h3><p class=\"text-sm text-grey-2x\">A different approach @ time decorating</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"viewATime=!viewATime\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"viewATime\" [@500]=\"'fadeInUp'\"><absolute-overflow-y><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | aTime:'now':'date' }}</span><span class=\"pad-h-sm\">==</span><span>{{ 0 | aDate:'now':'date':'getTime' }}</span></pre></absolute-overflow-y></div></div></div><h3 class=\"margin-bottom-0\">More Pipe Examples</h3><div class=\"flex-wrap child-margin-xs child-pad-xs text-center\"><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | aDate : 'now' : 'hmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ 0 | aDate : 'now' : 'hmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | aDate : 'now' : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ 0 | aDate : 'now' : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ null | aDate : 'now' : 'hmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ null | aDate : 'now' : 'hmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ null | aDate : 'now' : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ null | aDate : 'now' : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | aDate : 'now' : ['addSeconds',60] : 'dateSecondDiff' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ 0 | aDate : 'now' : ['addSeconds',60] : 'dateSecondDiff' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ '13:30' | aTime : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ '13:30' | aTime : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ '1:30 pm' | aTime : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ '1:30 pm' | aTime : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ '12:00 am' | aTime : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ '12:00 am' | aTime : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ '12:00 pm' | aTime : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ '12:00 pm' | aTime : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ '01/01/2014 2:00 am' | aDate : ['dateMinuteDiff','01/02/2014 2:00 am'] }}</span><span class=\"text-grey-2x\">&nbsp;== {{ '01/01/2014 2:00 am' | aDate : ['dateMinuteDiff','01/02/2014 2:00 am'] }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | ack : 'date' : 'now' : 'hmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ 0 | ack : 'date' : 'now' : 'hmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | ack : 'date' : 'now' : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ 0 | ack : 'date' : 'now' : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ null | ack : 'date' : 'now' : 'hmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ null | ack : 'date' : 'now' : 'hmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ null | ack : 'date' : 'now' : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ null | ack : 'date' : 'now' : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | ack : 'date' : 'now' : ['addSeconds',60] : 'dateSecondDiff' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ 0 | ack : 'date' : 'now' : ['addSeconds',60] : 'dateSecondDiff' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ '13:30' | aTime : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ '13:30' | aTime : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ '1:30 pm' | aTime : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ '1:30 pm' | aTime : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ '12:00 am' | aTime : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ '12:00 am' | aTime : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ '12:00 pm' | aTime : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ '12:00 pm' | aTime : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ '01/01/2014 2:00 am' | ack : 'date' : ['dateMinuteDiff','01/02/2014 2:00 am'] }}</span><span class=\"text-grey-2x\">&nbsp;== {{ '01/01/2014 2:00 am' | ack : 'date' : ['dateMinuteDiff','01/02/2014 2:00 am'] }}</span></div></div>"