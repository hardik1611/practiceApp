import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit {
  sourceSub: Subscription | undefined;
  constructor() {}

  ngOnInit(): void {
    /* Example 1 */
    const source = interval(1000);

    this.sourceSub = source.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
    });

    /* Example 2 */
    const user = [
      { name: 'Hardik', age: 30 },
      { name: 'Jaydeep', age: 25 },
      { name: 'Kishan', age: 25 },
      { name: 'Dhruv', age: 33 },
    ];

    const source2 = from(user);
    source2.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });

    /* Example 3  */
    const source3 = of('A', 'B', 'C');
    source3.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
