/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './pipes';
import * as i3 from './AckOptions.component';
const styles_AckOptions:any[] = ([] as any[]);
export const RenderType_AckOptions:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_AckOptions,
    data:{}});
function View_AckOptions_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵand(0,(null as any),(null as any),0))],(null as any),
      (null as any));
}
function View_AckOptions_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵand(16777216,(null as any),(null as any),2,(null as any),
      View_AckOptions_3)),i0.ɵdid(1,540672,(null as any),0,i1.NgTemplateOutlet,[i0.ViewContainerRef],
      {ngTemplateOutletContext:[0,'ngTemplateOutletContext'],ngTemplateOutlet:[1,'ngTemplateOutlet']},
      (null as any)),i0.ɵpod(2,{item:0,selected:1}),(_l()(),i0.ɵand(0,(null as any),
      (null as any),0))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _ck(_v,2,0,(<any>_v.parent).context.$implicit,_co.isItemSelected((<any>_v.parent).context.$implicit));
    const currVal_1:any = _co.templateRef;
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_AckOptions_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted(1,(null as any),['','']))],(null as any),(_ck,_v) => {
    const currVal_0:any = (<any>_v.parent).context.$implicit;
    _ck(_v,1,0,currVal_0);
  });
}
function View_AckOptions_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),5,'div',([] as any[]),
      (null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.selectItem(_v.context.$implicit)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(1,278528,(null as any),0,i1.NgClass,
      [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngClass:[0,
          'ngClass']},(null as any)),(_l()(),i0.ɵand(16777216,(null as any),(null as any),
      1,(null as any),View_AckOptions_2)),i0.ɵdid(3,16384,(null as any),0,i1.NgIf,
      [i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),
      i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AckOptions_4)),
      i0.ɵdid(5,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.getItemClass(_v.context.$implicit);
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = _co.templateRef;
    _ck(_v,3,0,currVal_1);
    const currVal_2:boolean = !_co.templateRef;
    _ck(_v,5,0,currVal_2);
  },(null as any));
}
export function View_AckOptions_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵpid(0,i2.ForceArray,([] as any[])),(_l()(),i0.ɵeld(1,0,(null as any),
      (null as any),2,'div',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),i0.ɵdid(2,278528,(null as any),0,i1.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngClass:[0,'ngClass']},(null as any)),
      i0.ɵpod(3,{'border-grey-6x border-top':0}),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),2,(null as any),View_AckOptions_1)),i0.ɵdid(5,802816,(null as any),
          0,i1.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,
              'ngForOf']},(null as any)),i0.ɵppd(6,1)],(_ck,_v) => {
    var _co:i3.AckOptions = _v.component;
    const currVal_0:any = _ck(_v,3,0,_co.stylize);
    _ck(_v,2,0,currVal_0);
    const currVal_1:any = i0.ɵunv(_v,5,0,_ck(_v,6,0,i0.ɵnov(_v,0),_co.array));
    _ck(_v,5,0,currVal_1);
  },(null as any));
}
export function View_AckOptions_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),2,'ack-options',
      ([] as any[]),(null as any),(null as any),(null as any),View_AckOptions_0,RenderType_AckOptions)),
      i0.ɵdid(1,4308992,(null as any),1,i3.AckOptions,[i0.ElementRef],(null as any),
          (null as any)),i0.ɵqud(603979776,1,{templateRefs:1})],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const AckOptionsNgFactory:i0.ComponentFactory<i3.AckOptions> = i0.ɵccf('ack-options',
    i3.AckOptions,View_AckOptions_Host_0,{array:'array',stylize:'stylize',multiple:'multiple',
        toggleable:'toggleable',inputTemplateRefs:'inputTemplateRefs',model:'model',
        ref:'ref',arrayKey:'arrayKey',modelKey:'modelKey',arrayToModelKey:'arrayToModelKey'},
    {modelChange:'modelChange',refChange:'refChange'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2Fja2VyYXBwbGUvcHJvamVjdHMvQWNrL2Jyb3dzZXIvIEFuZ3VsYXIvYWNrLWFuZ3VsYXIvc3JjL0Fja09wdGlvbnMuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2Fja2VyYXBwbGUvcHJvamVjdHMvQWNrL2Jyb3dzZXIvIEFuZ3VsYXIvYWNrLWFuZ3VsYXIvc3JjL0Fja09wdGlvbnMuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvYWNrZXJhcHBsZS9wcm9qZWN0cy9BY2svYnJvd3Nlci8gQW5ndWxhci9hY2stYW5ndWxhci9zcmMvQWNrT3B0aW9ucy5jb21wb25lbnQudHMuQWNrT3B0aW9ucy5odG1sIiwibmc6Ly8vVXNlcnMvYWNrZXJhcHBsZS9wcm9qZWN0cy9BY2svYnJvd3Nlci8gQW5ndWxhci9hY2stYW5ndWxhci9zcmMvQWNrT3B0aW9ucy5jb21wb25lbnQudHMuQWNrT3B0aW9uc19Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgW25nQ2xhc3NdPVwieydib3JkZXItZ3JleS02eCBib3JkZXItdG9wJzpzdHlsaXplfVwiPjwvZGl2PjxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgYXJyYXl8YXJyYXlcIiAoY2xpY2spPVwic2VsZWN0SXRlbShpdGVtKVwiIFtuZ0NsYXNzXT1cImdldEl0ZW1DbGFzcyhpdGVtKVwiPjxuZy10ZW1wbGF0ZSAqbmdJZj1cInRlbXBsYXRlUmVmXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVSZWZcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2l0ZW06aXRlbSwgc2VsZWN0ZWQ6aXNJdGVtU2VsZWN0ZWQoaXRlbSl9XCI+PC9uZy10ZW1wbGF0ZT48c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVJlZlwiPnt7IGl0ZW0gfX08L3NwYW4+PC9kaXY+IiwiPGFjay1vcHRpb25zPjwvYWNrLW9wdGlvbnM+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQTZKO01BQUEsMkJBQUE7TUFBQTtNQUFBLHNCQUFrRTs7O0lBQUE7SUFBakM7SUFBakMsV0FBa0UsVUFBakMsU0FBakM7Ozs7b0JBQXVKO01BQUEsd0VBQTJCO2FBQUE7SUFBQTtJQUFBOzs7O29CQUFsUjtNQUFBO1FBQUE7UUFBQTtRQUFzQztVQUFBO1VBQUE7UUFBQTtRQUF0QztNQUFBLHVDQUFBO01BQUE7VUFBQSwyQkFBZ0c7TUFBQSwyQ0FBQTtNQUFBLHNFQUF1SjthQUFBO2FBQUE7VUFBQTs7SUFBdEw7SUFBakUsV0FBaUUsU0FBakU7SUFBNkc7SUFBYixXQUFhLFNBQWI7SUFBNko7SUFBTixXQUFNLFNBQU47Ozs7MkRBQXBUO01BQUE7TUFBQSxxQ0FBQTtrREFBQTthQUFLLG9DQUF3RDtVQUFBLHlEQUFBO1VBQUE7Y0FBQSxrQ0FBSzs7SUFBN0Q7SUFBTCxXQUFLLFNBQUw7SUFBa0U7SUFBTCxXQUFLLFNBQUw7Ozs7b0JDQTdEO01BQUE7YUFBQTtVQUFBO0lBQUE7Ozs7Ozs7In0=