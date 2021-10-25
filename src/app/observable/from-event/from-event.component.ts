import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { AppUtilityService } from 'src/app/services/app-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn: ElementRef<any> | undefined;

  constructor(private utilityService: AppUtilityService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let count = 0;
    fromEvent(this.addBtn?.nativeElement, 'click').subscribe((res) => {
      let text = 'Video' + count++;
      console.log('res : ', text);
      this.utilityService.printText(text, 'el1');
      this.utilityService.printText(text, 'el2');
    });

  }
}
