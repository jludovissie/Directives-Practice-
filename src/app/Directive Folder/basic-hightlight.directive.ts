import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
  constructor(private highlightElement: ElementRef ) {
    
  }
  ngOnInit(){
    this.highlightElement.nativeElement.style.backgroundColor= 'green'
  }
}