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
    //Log incoming manic percentage from state component
    console.log("Manic percentage from state component: " + manicpercentage);

    //Set local manic percenage to manic percentage sent by state component
    this.manicpercentage = manicpercentage;

    //Log local manic percentage 
    console.log("Local manic percentage in modal service: " + this.manicpercentage);

    //Set behavior subject to local manic percentage
    this.manicpercentagebs.next(this.manicpercentage);
  }

  setDepressedPercentage(depressedpercentage: any) {
    //Log incoming depressed percentage from state component
    console.log("Depressed percentage from state component: " + depressedpercentage);

    //Set local depressed percenage to depressed percentage sent by state component
    this.depressedpercentage = depressedpercentage;

    //Log local depressed percentage
    console.log("Local depressed percentage in modal service: " + this.depressedpercentage);

    //Set behavior subject to local depressed percentage
    this.depressedpercentagebs.next(this.depressedpercentage)
  }

  setEnvironment(environment: any) {
    //Log incoming environment from environment component
    console.log(environment);
    
    //Set local environment to environment sent from environment component
    this.environment = environment;

    //Log local environment 
    console.log(this.environment);

    //Set behavior subject to local environment
    this.environmentbs.next(this.environment);
  }

  setBehavior(behavior: any) {
    //Log incoming behavior from behavior component
    console.log(behavior);

    //Set local behavior to behavior sent from behavior component
    this.behavior = behavior;
    this.behaviorbs.next(this.behavior);
    console.log(this.behavior);
  }

  setComfort(comfort: any) {
    //Log incoming comfort from comfort component
    console.log(comfort);
    this.comfort = comfort;
    this.comfortbs.next(this.comfort);
    console.log(this.comfort);
  }

}
