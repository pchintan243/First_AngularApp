import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, interval, map, of } from 'rxjs';

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

  arr1 = [1, 2, 3, 4, 5]
  arr2 = ['A', 'B', 'C', 'D', 'E']
  // Another type of observable
  // of operator emits the value as it is.
  // It takes multiple arguments.
  obs = of(this.arr1, this.arr2);

  // From iterates over the iterable and execute value one by one
  // It takes single argument
  obss = from(this.arr1);


  // manipulate the data
  tranObss = this.obss.pipe(map((val) => {
    return val * 5;
  }))

  // Filter the data.
  filterObss = this.obss.pipe(filter((val) => {
    return val > 3;
  }))

  // Combination of map and filter
  comb = this.obss.pipe(map((val) => {
    return val * 5;
  }), filter((val) => {
    return val > 3;
  }))

  // Short hand property
  short = from(this.arr1).pipe(map((val) => {
    return val * 5;
  }), filter((val) => {
    return val > 3;
  }));

  counterObs = interval(1000);
  counterSub: any;

  ngOnInit(): void {
    // subscribe method takes 3 optional parameter which is next, error, complete.
    this.myObservable.subscribe((val) => {
      // console.log(val);
    }, (err) => {
      // console.log(err.message);
    }, () => {
      // console.log('Completed..!!');
    })

    // of observable logic
    this.obs.subscribe((val) => {
      // console.log(val);
    }, (err) => {
      // console.log(err.message);
    }, () => {
      // console.log('Completed..!!');
    })

    // from observable logic
    this.obss.subscribe((val) => {
      // console.log(val);
    }, (err) => {
      // console.log(err.message);
    }, () => {
      // console.log('Completed..!!');
    })

    // map logic
    this.tranObss.subscribe((val) => {
      // console.log(val);
    }, (err) => {
      // console.log(err.message);
    }, () => {
      // console.log('Completed..!!');
    })

    // Filter logic
    this.filterObss.subscribe((val) => {
      // console.log(val);
    }, (err) => {
      // console.log(err.message);
    }, () => {
      // console.log('Completed..!!');
    })

    // For interval logic --> subscribe method
    this.counterSub = this.counterObs.subscribe((value) => {
      console.log(value);
    });

  }

  unsubscribe() {
    // To stop the subscribe data
    // Stop emitting the data when ununsubscribe() method invokes
    this.counterSub.unsubscribe()
  }
}
