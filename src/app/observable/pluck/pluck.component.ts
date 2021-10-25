import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  data: any;
  data2: any;
  users = from([
    {
      name: 'Jay',
      job: { title: 'Angular Developer', exp: '6 Yr' },
      skill: 'Angular',
    },
    {
      name: 'Mit',
      job: { title: 'HTML Developer', exp: '3 Yr' },
      skill: 'HTML',
    },
    {
      name: 'Zeel',
      job: { title: 'CSS Developer', exp: '4 Yr' },
      skill: 'CSS',
    },
    {
      name: 'Paril',
      job: { title: 'React Developer', exp: '10 Yr' },
      skill: 'JS/TS',
    },
    {
      name: 'Dev',
      job: { title: 'UX Developer', exp: '2 Yr' },
      skill: 'React',
    },
  ]);
  constructor() {}

  ngOnInit(): void {
    /* Ex - 01 */
    this.users
      .pipe(
        // map((data) => data.name),
        pluck('name'),
        toArray()
      )
      .subscribe((res) => {
        this.data = res;
      });

    /* Ex - 02 */
    this.users
      .pipe(
        // map((data) => data.name),
        pluck('job', 'title'),
        toArray()
      )
      .subscribe((res) => {
        this.data2 = res;
      });
  }
}
