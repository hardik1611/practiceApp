import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppUtilityService } from 'src/app/services/app-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  //Subscription
  sub1: Subscription | undefined;
  sub2: Subscription | undefined;

  //Messages
  msg1: any;
  msg2: any;

  constructor(private utilityService: AppUtilityService) {}

  ngOnInit(): void {
    /* ------------------------------------Ex - 01------------------------------------- */
    const broadcastVideos = interval(1000);

    this.sub1 = broadcastVideos
      .pipe(map((data) => 'Video ' + data))
      .subscribe((res) => {
        // console.log(res);
        this.msg1 = res;
      });

    setTimeout(() => {
      this.sub1?.unsubscribe();
    }, 10000);

    /* ------------------------------------Ex - 02------------------------------------- */
    this.sub2 = broadcastVideos
      .pipe(map((data) => (data = data * 10)))
      .subscribe((res) => {
        // console.log(res);
        this.msg2 = res;
      });

    setTimeout(() => {
      this.sub2?.unsubscribe();
    }, 10000);
    /* ------------------------------------Ex - 03------------------------------------- */

    const members = from([
      { id: 1, age: 22, name: 'Hardik' },
      { id: 2, age: 25, name: 'Jay' },
      { id: 3, age: 22, name: 'Amit' },
      { id: 4, age: 26, name: 'Dev' },
      { id: 5, age: 28, name: 'Shiv' },
      { id: 6, age: 21, name: 'Mit' },
      { id: 7, age: 20, name: 'Naresh' },
      { id: 8, age: 23, name: 'Zeel' },
    ]);

    members.pipe(map((data) => data.name)).subscribe((res) => {
      this.utilityService.printText(res, 'elContainer3');
      console.log(res);
    });
  }
}
