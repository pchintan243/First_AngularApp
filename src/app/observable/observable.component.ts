import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  myObservable = new Observable((observer) => {
    setTimeout(() => { observer.next("1"); }, 1000);
    setTimeout(() => { observer.next("2"); }, 2000);
    // Error method show the error and after error observer would not be execute even complete observer not execute.
    // setTimeout(() => { observer.error(new Error('Please try again later..!!')) }, 3000);
    setTimeout(() => { observer.next("4"); }, 4000);
    // If no error occurs then it emits the complete method which logic is defined in subscribe method.
    setTimeout(() => { observer.complete(); }, 5000);

    // This method not execute because of complete method execute before this one.
    setTimeout(() => { observer.next("6"); }, 6000);
  })

  ngOnInit(): void {
    // subscribe method takes 3 optional parameter which is next, error, complete.
    this.myObservable.subscribe((val) => {
      console.log(val);
    }, (err) => {
      alert(err.message)
    }, () => {
      alert('Completed..!!');
    })
  }
}
