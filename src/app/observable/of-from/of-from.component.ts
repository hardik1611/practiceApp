import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { AppUtilityService } from 'src/app/services/app-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  msg: any;
  constructor(private utilityService: AppUtilityService) {}

  ngOnInit(): void {
    //Example 1: 'of'
    const obs1 = of('A', 'B', 'C', 'D ');
    obs1.subscribe((res) => {
      this.utilityService.printText(res, 'elContainer');
    });

    const obs2 = of({ a: 'A', b: 'B', c: 'C' });
    obs2.subscribe((res) => {
      this.msg = res;
    });

    //Example 3: 'from' with array
    let sampleArray = ['Aa', 'Bb', 'Cc'];
    const obs3 = from(sampleArray);

    obs3.subscribe((res) => {
      // console.log(res);
      this.utilityService.printText(res, 'elContainer3');
    });

    //'from' with promise data
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res('Promise Resolved');
      }, 3000);
    });

    const obs4 = from(promise);
    obs4.subscribe((res) => {
      // console.log("from promise : ", res);
      this.utilityService.printText(res, 'elContainer4');
    });

    //'from' with string data
    const obs5 = from('Welcome dear');
    obs5.subscribe((res) => {
      this.utilityService.printText(res, 'elContainer5');
      console.log('string to obs : ', res);
    });
  }
}
