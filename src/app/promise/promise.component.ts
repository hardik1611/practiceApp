import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  promiseVal = {} as any;

  dell = {
    brand: 'Dell',
    color: 'Red',
  };
  hp = {
    brand: 'HP',
    color: 'Black',
  };
  notAvail = {
    msg: 'Not Available',
    status: 'Failed ',
  };

  constructor() {}

  dellAvailable() {
    return false;

    /* return setTimeout(() => {
      return true;
    }, 3000); */
  }

  hpAvailable() {
    return false;

    /* return setTimeout(() => {
      return false;
    }, 3000); */
  }

  ngOnInit(): void {
    /* let buyLaptop = new Promise(function (resolve, reject) {
      resolve('Promise is resolved');
    }); */
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved');
      //reject('Promise is rejected');
      if (this.dellAvailable()) {
        setTimeout(() => {
          // resolve('Dell is purchased');
          resolve(this.dell);
        }, 3000);
      } else if (this.hpAvailable()) {
        setTimeout(() => {
          // resolve('HP is purchased');
          resolve(this.hp);
        }, 3000);
      } else {
        setTimeout(() => {
          // reject('Laptop is not available ');
          reject(this.notAvail);
        }, 3000);
      }
    });

    buyLaptop
      .then((res) => {
        console.log('Success > ', res);
        this.promiseVal = res;
      })
      .catch((res) => {
        console.log('Not Success > ', res);
        this.promiseVal = res;
      });
  }

  myFunction() {
    /* definite type : when we click on button this will call > it is called definite  */
    console.log('myFunction called');

    /* not definite : when we call api - promise */
  }
}
