import {Component, HostListener, OnInit} from '@angular/core';
import {UtilityService} from '../../../core/utility.service';
import {ISources} from '../../../models/ISources';

@Component({
  selector: 'app-photos-board',
  templateUrl: './photos-board.component.html',
  styleUrls: ['./photos-board.component.scss']
})

export class PhotosBoardComponent implements OnInit {

  photos: any[];
  sources: ISources[] = [];
  sizes: any;
  boardClass: string;
  constructor(private utility: UtilityService) {
    this.getSmallPhotos();
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  public getPhotos() {
    this.utility.getPhotoList().subscribe(
      value => {
        this.photos = value.photos.photo;
        for (const photo of this.photos) {
          this.getPhotoSizes(photo.id);
        }
      },
      error => console.log(error)
    );
  }

  public getPhotoSizes(id: string){
    this.utility.getLinkById(id).subscribe(
      value => {
        this.sizes = value;
        for (const size of this.sizes.sizes.size) {
          console.log(size);
          if (size.width === 150) {
            this.sources.push(size.source);
          }
        }
      },
      error => console.log(error)
    );
  }

  public async getUrl() {
    for (const photo of this.photos) {
      console.log(photo);
    }
  }

  public getSmallPhotos() {
    this.boardClass = 'sm-board';
  }

  public getHighPhotos() {
    this.boardClass = 'hg-board';
  }
}
