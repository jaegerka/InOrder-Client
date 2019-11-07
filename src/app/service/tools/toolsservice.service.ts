import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsserviceService {

  select: String;
  selectbs = new BehaviorSubject<any>(this.select);

  depressed: String;
  depressedbs = new BehaviorSubject<any>(this.depressed);

  manic: String;
  manicbs = new BehaviorSubject<any>(this.manic);

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

  setAdvice(depressed: String, manic: String) {
    console.log(depressed);
    console.log(manic);
    this.depressed = depressed;
    this.depressedbs.next(this.depressed);
    this.manic = manic;
    this.manicbs.next(this.manic);
    console.log(this.depressedbs);
    console.log(this.manicbs);
  }

}
