import { Component } from '@angular/core';

@Component({
  selector: 'app-card-highlight',
  templateUrl: './card-highlight.component.html',
  styleUrls: ['./card-highlight.component.css']
})
export class CardHighlightComponent {
  like = [
    { title: 'Video1', share: 89, likes: 571, comments: 83 },
    { title: 'Video2', share: 31, likes: 660, comments: 81 },
    { title: 'Video3', share: 49, likes: 843, comments: 77 },
    { title: 'Video4', share: 97, likes: 227, comments: 33 },
    { title: 'Video5', share: 34, likes: 198, comments: 29 },
  ];

  mostLikedVideo = this.mostLike();

  mostLike() {

    let likeCopy = [...this.like];
    // Sort the array in descending order by likes and get the first element which has highest likes
    return likeCopy.sort((curr, next) => next.likes - curr.likes)[0];
  }
}
