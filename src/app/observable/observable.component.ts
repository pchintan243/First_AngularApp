import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  myObservable = new Observable((observer) => {
    observer.next("1");
    observer.next("2");
    observer.next("3");
  })

  ngOnInit(): void {
    // subscribe method takes 3 optional parameter which is next, error, complete.
    this.myObservable.subscribe((val) => {
      console.log(val);
    })
  }
}
