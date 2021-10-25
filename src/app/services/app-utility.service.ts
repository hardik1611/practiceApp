import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppUtilityService {
  constructor() {}

  printText(text: any, elementId: any) {
    let liEle = document.createElement('li');
    liEle.innerText = text;
    document.getElementById(elementId)?.append(liEle); 
  }
}
