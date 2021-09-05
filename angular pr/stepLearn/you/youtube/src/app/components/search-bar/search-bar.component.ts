import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WikipediaService } from 'src/app/services/wikipedia.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  @Output() submitted = new EventEmitter<string>(); 
  term  = ''; 

  constructor(private wikipediaSearch : WikipediaService) { }

  ngOnInit(): void {
  }

  onformSubmit(event:any ) { 

      event.preventDefault(); 
      // console.log(this.term);
      this.submitted.emit(this.term); 
      console.log(this.wikipediaSearch.onSearch(this.term));
      
  }

}
