import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  data1: any;
  data2: any;
  data3: any;
  dataArr = [
    { id: 1, name: 'Jay', gender: 'male' },
    { id: 2, name: 'Mit', gender: 'male' },
    { id: 3, name: 'Vir', gender: 'male' },
    { id: 4, name: 'Aki', gender: 'male' },
    { id: 5, name: 'Komal', gender: 'female' },
    { id: 6, name: 'Hardip', gender: 'male' },
    { id: 7, name: 'Gopi', gender: 'female' },
    { id: 8, name: 'Chintan', gender: 'male' },
  ];
  constructor() {}

  ngOnInit(): void {
    /* Ex - 01  */
    const source = from(this.dataArr);
    source
      .pipe(
        filter((member) => member.name.length > 4),
        toArray()
      )
      .subscribe((res) => {
        // console.log(res);
        this.data1 = res;
      });

    /* Ex - 02 */
    const source2 = from(this.dataArr);
    source2
      .pipe(
        filter((member) => member.gender === 'female'),
        toArray()
      )
      .subscribe((res) => {
        // console.log(res);
        this.data2 = res;
      });

    /* Ex - 03 */
    const source3 = from(this.dataArr);
    source3
      .pipe(
        filter((member) => member.id <= 6),
        toArray()
      ) 
      .subscribe((res) => {
        // console.log(res);
        this.data3 = res;
      });
  }
}
