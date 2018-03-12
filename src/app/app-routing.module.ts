import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentairesComponent } from './composants/commentaires/commentaires.component';
import { Composant2Component } from './composants/composant2/composant2.component';
import { GalleryComponent } from './composants/gallery/gallery.component';
import { AboutComponent } from './composants/about/about.component';

const routes: Routes = [
  { path: 'commentaires', component: CommentairesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'compo2', component: Composant2Component, data: { titre: 'MonTitre', valeur: 'VVVV' } },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'commentaires', pathMatch: 'full' },
  { path: '**', redirectTo: 'commentaires' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
