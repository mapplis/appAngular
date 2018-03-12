import { Component, OnInit } from '@angular/core';
import { CommentairesService } from '../../services/commentaires.service';
import { Commentaire } from '../../classes/commentaire';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {
  title = 'app';
  commentaire: Commentaire = new Commentaire();
  commentaires: Commentaire[] = [];

  constructor(private commentaireService: CommentairesService) { }

  ngOnInit() {
    this.commentaires = this.commentaireService.getCommentaires();
  }

  ajouterCommentaire(f) {
    this.commentaireService.addCommentaire(this.commentaire);
    this.commentaire = new Commentaire();
    this.commentaires = this.commentaireService.getCommentaires();
  }
}
