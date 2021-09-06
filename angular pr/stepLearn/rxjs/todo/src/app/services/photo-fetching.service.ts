import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



interface UnsplashPic { 
  urls : { 
    regular:string , 
    small:string 
  }
}


@Injectable({
  providedIn: 'root'
})
export class PhotoFetchingService {

  constructor(private  http: HttpClient) {}

   

  getPhoto() {
     return this.http.get<UnsplashPic>("https://api.unsplash.com/photos/random",  {
      headers :{
        Authorization: "Client-ID AdABiXHlWX3RRrLRAwYDSA0zd3LfA-sDS99EnHdQWQ8"
      }
    });
  }
   



}
