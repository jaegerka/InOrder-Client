import { Injectable } from '@angular/core';
import { InOrderUser } from '../../model/inorderuser/inorderuser.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

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
      .subscribe(data => console.log(data));
  }

  updateInOrderUser(currentInOrderUser: InOrderUser) {
    console.log("In Order User Service Update Method Called");
    console.log(currentInOrderUser);
    return this.httpClient.put('http://localhost:8080/inorderuser/update', currentInOrderUser)
  }

  addInOrderUser(newInOrderUser: InOrderUser) {
    console.log("Added new In Order User");
    console.log(newInOrderUser);
    console.log(JSON.stringify(newInOrderUser));
    return this.httpClient.post<InOrderUser>('http://localhost:8080/inorderuser/add', newInOrderUser)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
