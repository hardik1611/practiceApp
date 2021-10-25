import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppUtilityService } from 'src/app/services/app-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  sub1: Subscription | undefined;
  sub2: Subscription | undefined;

  arr = ['Jay', 'Mit', 'Dev', 'Rudra', 'Krunal', 'Komal', 'Hdip', 'Akshay'];
  colors = ['Red', 'Blue', 'Green', 'White', 'Yellow', 'Orange', 'Black'];

  myColor: any;

  constructor(private utilityService: AppUtilityService) {}

  ngOnInit(): void {
    const source = interval(1000);

    /* Ex - 01 */
    this.sub1 = source
      .pipe(
        tap((res) => {
          console.log('Tap before : ' + res);

          if (res === 4) {
            this.sub1?.unsubscribe();
          }
        }),
        map((itm) => this.arr[itm]),
        tap((res) => console.log('tap after : ' + res))
      )
      .subscribe((res) => {
        this.utilityService.printText(res, 'el1');
      });

    /* Ex - 02 */
    this.sub2 = source
      .pipe(
        tap((res) => {
          this.myColor = this.colors[res];
          console.log('Tap  : ' + res);
          if (res === 5) {
            this.sub2?.unsubscribe();
          }
        }),
        map((itm) => this.colors[itm])
        // tap((res) => console.log('tap  : '))
      )
      .subscribe((res) => {
        this.utilityService.printText(res, 'el2');
      });
  }
}
