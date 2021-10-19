import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { BasicHighlightDirective } from './Directive Folder/basic-hightlight.directive';
import { BetterHighlightDirective } from './Directive Folder/better-highlight.directive';
import { ImproveComponent } from './improve/improve.component';
import { ImprovedDirective } from './Directive Folder/improved.directive';
import { ImproveDirective } from './Directive Folder/improve.directive';
import { StructuralComponent } from './structural/structural.component';
import { StructureDirective } from './Directive Folder/structure.directive';




@NgModule({
  imports:      [ BrowserModule,
                 FormsModule ],
  declarations: [ AppComponent, 
                  HelloComponent, 
                  HeaderComponent,
                  BasicHighlightDirective,
                  BetterHighlightDirective, 
                  ImproveComponent ,
                  ImprovedDirective ,
                  ImproveDirective,
                  StructuralComponent ,
                  StructureDirective],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
