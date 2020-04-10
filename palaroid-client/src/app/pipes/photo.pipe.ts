import { Pipe, PipeTransform } from '@angular/core';
import { PhotosBoardComponent} from '../photos/components/photos-board/photos-board.component';

@Pipe({
  name: 'photo'
})
export class PhotoPipe implements PipeTransform {

  constructor(private board: PhotosBoardComponent) {
  }

  transform(value: any): string {
    const sizes = this.board.getPhotoSizes(value);
    console.log(sizes);
    // for (const size of sizes) {
    //   for (const photo of size) {
    //   if (photo.width === 75){
    //     return size.source;
    //   }
    //   }
    // }

    return null;
  }

}
