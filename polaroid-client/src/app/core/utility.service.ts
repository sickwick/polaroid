import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }

  public getPhotoList(): Observable<any> {
    return this.http.get(`${environment.FLICKR_URL}?method=flickr.photos.getRecent&api_key=${environment.FLICKR_KEY}&per_page=100&format=json&nojsoncallback=1"`);
  }

  public getLinkById(id: string): Observable<any> {
    return this.http.get(`${environment.FLICKR_URL}?method=flickr.photos.getSizes&api_key=${environment.FLICKR_KEY}&photo_id=${id}&format=json&nojsoncallback=1`);
  }
}

