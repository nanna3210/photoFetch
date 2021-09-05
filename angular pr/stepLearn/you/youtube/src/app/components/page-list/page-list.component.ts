import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

xss= `<img src="http://url.to.file.which/not.exist" onerror=alert(document.cookie);>`
  @Input() pages = [] ; 

  constructor() { }

  ngOnInit(): void {
  }

}
