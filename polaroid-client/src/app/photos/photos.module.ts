import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosBoardComponent } from './components/photos-board/photos-board.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [PhotosBoardComponent],
  exports: [
    PhotosBoardComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
    ]
})
export class PhotosModule { }
