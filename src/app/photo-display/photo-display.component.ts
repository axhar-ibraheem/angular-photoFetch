import { Component } from '@angular/core';
import { PhotoApiService } from "../services/photo-api.service";
@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.css']
})
export class PhotoDisplayComponent {
  photoUrl: string = '';
     constructor(private photosService: PhotoApiService) {
      this.fetchPhoto()
     }
     getRandomPhotos() {
          this.fetchPhoto()
     }
     fetchPhoto() {
       this.photosService.getPhoto().subscribe((response) => {
         const {regular} = response.urls
         this.photoUrl = regular;
       })
     }
}
