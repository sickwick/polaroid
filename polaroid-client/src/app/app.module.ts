import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {PhotosModule} from './photos/photos.module';
import {PhotoPipe} from './pipes/photo.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PhotoPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        SharedModule,
        PhotosModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
