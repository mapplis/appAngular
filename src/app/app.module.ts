import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './composants/app/app.component';
import { CommentairesComponent } from './composants/commentaires/commentaires.component';
import { Composant2Component } from './composants/composant2/composant2.component';
import { GalleryComponent } from './composants/gallery/gallery.component';

import { CommentairesService } from './services/commentaires.service';
import { GalleryService } from './services/gallery.service';
import { AutofocusDirective } from './autofocus.directive';
import { AboutComponent } from './composants/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentairesComponent,
    Composant2Component,
    GalleryComponent,
    AutofocusDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpModule, ReactiveFormsModule
  ],
  providers: [CommentairesService, GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
