import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  nbPhotosParPage = 10;
  photos: any;
  motCle: string;
  pageCourante = 1;
  nbPages = 0;

  constructor(private galleryService: GalleryService) { }
  ngOnInit() {
  }

  Rechercher() {
    this.pageCourante = 1;
    this.RechercherPhotos(this.motCle, this.pageCourante, this.nbPhotosParPage);
  }

  Precedentes() {
    this.pageCourante = this.pageCourante - 1;
    this.RechercherPhotos(this.motCle, this.pageCourante, this.nbPhotosParPage);
  }

  Suivantes() {
    this.pageCourante = this.pageCourante + 1;
    this.RechercherPhotos(this.motCle, this.pageCourante, this.nbPhotosParPage);
  }

  RechercherPhotos(critere, page, nbPhotos) {
    this.galleryService.RechercherPhotos(critere, page, nbPhotos)
      .subscribe(resp => {
        this.photos = resp;
        this.nbPages = Math.ceil(this.photos.totalHits / this.nbPhotosParPage);
      }, err => console.log(err));
  }

}
