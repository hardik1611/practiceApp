import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  sub1: Subscription | undefined;
  constructor() {}

  ngOnInit(): void {
    // const broadCastVideo = interval(1000);
    const broadCastVideo = timer(5000,1000);
    this.sub1 = broadCastVideo.subscribe((res) => {
      console.log('res', res);
      if (res >= 5) {
        this.sub1?.unsubscribe();
      }
    });
  }
}
