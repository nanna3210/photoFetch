import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
import { WikipediaService } from './services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  pages = []; 

  constructor(private wikiPediaSearch : WikipediaService) { 

  }
  onTerm(event ) { 

      console.log(event +'This is Coming Fromthe App Module');
      // console.log(this.wikiPediaSearch.onSearch("love"));
      const result = this.wikiPediaSearch.onSearch(event).subscribe((response :any) => { 
           this.pages=  response.query.search
          console.log(response.query.search);
          

      })
      
      

  }


  // https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Nelson Mandela&format=json



}
