import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PhotoApiService {
 private apiEndPoint = ''
  constructor(private http: HttpClient) {

  }


}
