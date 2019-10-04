import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  manicpercentage: any;
  depressedpercentage: any;
  environment: any;
  behavior: any;
  comfort: any;

  manicpercentagebs = new BehaviorSubject<any>(this.manicpercentage);
  depressedpercentagebs = new BehaviorSubject<any>(this.depressedpercentage);
  environmentbs = new BehaviorSubject<any>(this.environment);
  behaviorbs = new BehaviorSubject<any>(this.behavior);
  comfortbs = new BehaviorSubject<any>(this.comfort);

  constructor () {
   }

   setManicPercentage(manicpercentage: any) {
      this.manicpercentage = manicpercentage;
      this.manicpercentagebs.next(this.manicpercentage);
      console.log(manicpercentage);
      console.log(this.manicpercentage);
   }

   setDepressedPercentage(depressedpercentage: any) {
     this.depressedpercentage = depressedpercentage;
     this.depressedpercentagebs.next(this.depressedpercentage)
     console.log(depressedpercentage);
     console.log(this.depressedpercentage);
   }

   setEnvironment(environment: any) {
    this.environment = environment;
    this.environmentbs.next(this.environment);
    console.log(environment);
    console.log(this.environment);
 }

    setBehavior(behavior: any) {
      this.behavior = behavior;
      this.behaviorbs.next(this.behavior);
      console.log(behavior);
      console.log(this.behavior);
    }

    setComfort(comfort: any) {
      this.comfort = comfort;
      this.comfortbs.next(this.comfort);
      console.log(comfort);
      console.log(this.comfort);
   }

}
