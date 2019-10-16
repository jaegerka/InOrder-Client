import { Injectable } from '@angular/core';
import { InOrderUser } from '../../model/inorderuser/inorderuser.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InorderuserserviceService {

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application.json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  });

  constructor(private httpClient: HttpClient) { }

  getAllInOrderUsers() {
    return this.httpClient.get<InOrderUser[]>('http://localhost:8080/inorderuser/all')
      .map((data: any) => { return data })
  }

  getUserByUsername() {
    return this.httpClient.get<InOrderUser>('http://localhost:8080/inorderuser/username')
      .map((data: any) => { return data })
  }
}
