import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppUtilityService } from 'src/app/services/app-utility.service';

@Component({
  selector: 'app-custom-observalble',
  templateUrl: './custom-observalble.component.html',
  styleUrls: ['./custom-observalble.component.scss'],
})
export class CustomObservalbleComponent implements OnInit, OnDestroy {
  techStatus: any;
  subs2: Subscription | undefined;
  constructor(private utilityService: AppUtilityService) {}

  ngOnInit(): void {
    /* Ex - 01 : manual */
    const custObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('HTML');
      }, 2000);

      setTimeout(() => {
        observer.next('CSS');
        // observer.complete();
      }, 3000);

      setTimeout(() => {
        observer.next('JS');
        // observer.error('Limit Exceed');
        // this.techStatus = 'error';
      }, 4000);

      setTimeout(() => {
        observer.next('React');
        // observer.complete();
        // this.techStatus = 'success';
      }, 5000);
    });

    custObs1.subscribe(
      (res: any) => {
        this.utilityService.printText(res, 'elContainer1');
      },
      (err: any) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'success';
      }
    );

    /* Ex - 02 : Custom interval */
    const arr2 = ['Angular', 'TS', 'JS', 'React Native'];
    const custObs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next('data sent : ' + arr2[count]);
        count++;

        if (count > 2 ) {
          observer.error('Error emit');
          this.techStatus = 'error';
        }
        if (count > 5) {
          observer.complete();
          this.techStatus = 'success';

        }
      }, 1000);
    });

    this.subs2 = custObs2.subscribe((res: any) => {
      // console.log(res);
      this.utilityService.printText(res, 'elContainer2');
    });
    /* Ex - 03 : Random name */
    // const custObs2
  }

  ngOnDestroy() {
    this.subs2?.unsubscribe();
  }
}
