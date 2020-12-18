import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/models/user/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  API_URL = "https://localhost:44320/api";
  userId = localStorage.getItem("userId");

  get(){
    return this.http.get(`${this.API_URL}/user`);
  }

  getAllListsFromUser(){
    const headers = new HttpHeaders({'#Token': this.userId});
    return this.http.get(`${this.API_URL}/user/${this.userId}/grocerylist`,{ headers:headers });
  }

  getAllRemindersFromUser(){
    const headers = new HttpHeaders({'#Token': this.userId});
    return this.http.get(`${this.API_URL}/user/${this.userId}/reminder`,{ headers:headers });
  }

  post(user: User){
    return this.http.post(`${this.API_URL}/user/`,user);
  }

  getById(id: number){
    const headers = new HttpHeaders({'#Token': this.userId});
    return this.http.get(`${this.API_URL}/user/${id}`,{ headers:headers });
  }
}
