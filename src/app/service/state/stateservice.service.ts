import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Currentstate } from '../../model/currentstate/currentstate'

import 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class StateserviceService {

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application.json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  });

  constructor(private httpClient: HttpClient) { }

  getAllStates() {
    console.log("Get All States Run Successfully");

    return this.httpClient.get<Currentstate[]>('http://localhost:8080/currentstate/all')
      .map((data: any) => { return data })
  }

  addCurrentState(newCurrentState: Currentstate) {
    console.log("Add Current State Run");
    console.log(newCurrentState);

    return this.httpClient.post('http://localhost:8080/currentstate/add', newCurrentState)
      .subscribe(
        err => console.log(err)
    );
    
  }
}
