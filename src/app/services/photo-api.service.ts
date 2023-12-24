import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs";

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}
@Injectable({
  providedIn: 'root'
})
export class PhotoApiService {
 private apiEndPoint = 'https://api.unsplash.com/photos/random';
  constructor(private http: HttpClient) {
        http.get(this.apiEndPoint, )
  }

 getPhoto() {
   return this.http.get<UnsplashResponse>(this.apiEndPoint, {
     headers: {
       Authorization: 'Client-ID zUToMAG94t_Hpkl461eYp1NsUCkT0E5oIgHJ--MP948'
     }
   })
 }
}
