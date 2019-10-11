import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  page: any;

  pagebs = new BehaviorSubject<any>(this.page);

  setPage(page: any) {
    console.log(page);
    this.page = page;
    this.pagebs.next(this.page);
    console.log(this.page);
  }
}
