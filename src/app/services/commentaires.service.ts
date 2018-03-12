import { Injectable } from '@angular/core';
import { Commentaire } from '../classes/commentaire';
@Injectable()
export class CommentairesService {

  constructor() { }

  commentaires: Commentaire[] = [];

  getCommentaires(): Commentaire[] {

    return this.commentaires;
  }

  addCommentaire(commentaire: Commentaire) {
    commentaire.message = commentaire.message.trim();
    commentaire.dateMessage = new Date();

    this.commentaires.push(commentaire);
  }

}
