import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  inputValueSubject = new BehaviorSubject<string>('');

  getUsers(page: number = 1): Observable<any> {
    return this._httpClient.get(`https://reqres.in/api/users?page=${page}`);
  }
  getDetailsUser(id: number): Observable<any> {
    return this._httpClient.get(` https://reqres.in/api/users/${id}`);
  }
}
