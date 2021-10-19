import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
showPassword = false;
log = [] ;


  ngOnInit() {
  }
  onToggleDetails() {
    this.showPassword = !this.showPassword ;
    this.log.push(new Date())
  }
}