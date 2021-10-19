import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStructure]'
})
export class StructureDirective {
  @Input() defaultColor: string= 'transparent';  
  @Input() highlightColor: string = 'blue' ;
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor; 

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor; 
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor; 
  } 

  constructor() { }

}