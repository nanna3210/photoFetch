import { Component, OnInit } from '@angular/core';
import { PhotoFetchingService } from 'src/app/services/photo-fetching.service';




@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {


  nannaPic :string 
  constructor(private photofetching:PhotoFetchingService) {

    this.fetchPhoto(); 


   }

  ngOnInit(): void {
    
    
  
  }


  onclick(){ 

    this.fetchPhoto() ; 
  }

  fetchPhoto() { 
    this.photofetching.getPhoto().subscribe(nanna =>{ 
      this.nannaPic = nanna.urls.small; 
    })

  }
  

}
