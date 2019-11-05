import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsserviceService {

  select: String;
  selectbs = new BehaviorSubject<any>(this.select);

  constructor() { }

  setDepression(select: String) {
    console.log(select);
    this.select = select;
    this.selectbs.next(this.select);
    console.log(this.select);
    console.log(this.selectbs);
  }

  selectManic(select: String) {
    console.log(select);
    this.select = select;
    this.selectbs.next(this.select);
    console.log(this.select);
    console.log(this.selectbs);
  }

}
