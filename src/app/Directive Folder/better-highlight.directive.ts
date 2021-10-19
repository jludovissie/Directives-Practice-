import { Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appBetter]'
})

export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string= 'transparent' 
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = 'blue' ; 
  } 
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgroundColor = 'transparent' ;
  }
  constructor(private betterEl : ElementRef, 
              private renderer: Renderer2){}


  ngOnInit() {}
}
