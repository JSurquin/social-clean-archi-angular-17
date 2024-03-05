import { Injectable, inject } from '@angular/core';
import { CommentGateway } from '../../ports/comment.gateway';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../model/comment';

@Injectable()
export class CommentAdapterService extends CommentGateway {
  #http = inject(HttpClient);

  comments: Comment[] = [];
  //comments = this.#http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  getAllComments() {
    return this.#http.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
  getSpecificComment(id: string) {
    return this.#http.get<Comment>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }

  sendComment(comment: Comment) {
    return this.#http.post<Comment>(
      'https://jsonplaceholder.typicode.com/users',
      comment
    );
  }

  updateComment(comment: Comment) {
    return this.#http.put<Comment>(
      `https://jsonplaceholder.typicode.com/users/${comment.id}`,
      comment
    );
  }

  deleteComment(id: string) {
    return this.#http.delete<Comment>(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
  }
}
