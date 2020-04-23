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

  public getPhotos(): void {
    this.utility.getPhotoList().subscribe(
      value => {
        this.photos = value.photos.photo;
        for (const photo of this.photos) {
          this.getPhotoSizes(photo.id, this.getPhotoWidth());
        }
      },
      error => console.log(error)
    );
  }

  public getPhotoSizes(id: string, height: number): void {
    this.utility.getLinkById(id).subscribe(
      value => {
        this.sizes = value;
        for (const size of this.sizes.sizes.size) {
          if (size.width === height) {
            this.sources.push(size.source);
          }
        }
      },
      error => console.log(error)
    );
  }

  public getSmallPhotos(): void {
    this.boardClass = 'sm-board';
  }

  public getHighPhotos(): void {
    this.boardClass = 'hg-board';
  }

  public getPhotoWidth(): number {
    return this.boardClass === 'sm-board' ? 150 : 800;
  }
}
