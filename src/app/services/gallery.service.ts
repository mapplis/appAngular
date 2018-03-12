import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GalleryService {

  constructor(private http: Http) { }

  RechercherPhotos(critere, page, nbPhotos) {
    return this.http.get('https://pixabay.com/api/'
      + '?key=8323470-592576dd399829a47948eea08'
      + '&q=' + critere + '&page=' + page + '&per_page=' + nbPhotos).map(resp => resp.json());
  }

}
