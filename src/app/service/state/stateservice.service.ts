import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Currentstate } from '../model/currentstate'

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
        .subscribe((data) => {
          console.log(data);
          return data;
        })

  }
}
