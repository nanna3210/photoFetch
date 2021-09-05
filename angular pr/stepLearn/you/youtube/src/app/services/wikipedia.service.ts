import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private httpClient :HttpClient) { }


  onSearch(term :string ) { 
    

    // action=query&list=search&srsearch=mahatma%20Gandhi&format=json
    return this.httpClient.get("https://en.wikipedia.org/w/api.php", {
      params : { 
        action:'query', 
        list:'search', 
        format:'json', 
        utf8:'1', 
        srsearch:term, 
        origin:'*'

      }
    })
    
  } 
}
