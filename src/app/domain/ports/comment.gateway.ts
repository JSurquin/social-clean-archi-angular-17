import { Observable } from 'rxjs';
import { Comment } from '../model/comment';

export abstract class CommentGateway {
  abstract getSpecificComment(id: string): Observable<Comment>;
  abstract getAllComments(): Observable<Comment[]>;
  abstract sendComment(comment: Comment): Observable<Comment>;
  abstract updateComment(comment: Comment): Observable<Comment>;
  abstract deleteComment(id: string): Observable<Comment>;
}
