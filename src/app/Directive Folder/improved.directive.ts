import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImproved]'
})
export class ImprovedDirective implements OnInit {

  constructor(private improvedEl : ElementRef,
              private renderer: Renderer2) { }
ngOnInit(){}

@HostListener('mouseenter') mouseOver(eventData: Event){
  this.renderer.setStyle(this.improvedEl.nativeElement, 'backgroundColor', 'salmon')
}
@HostListener('mouseleave') mouseLeave(eventData: Event){
  this.renderer.setStyle(this.improvedEl.nativeElement, 'backgroundColor', 'transparent')
} 
}