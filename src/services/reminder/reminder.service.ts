import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reminder } from 'src/models/reminder/reminder';
@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor(private http: HttpClient) { }

  API_URL = "https://localhost:44320/api";
  userId = localStorage.getItem("userId");

  post(reminder: Reminder){
    const headers = new HttpHeaders({'#Token': this.userId});
    return this.http.post(`${this.API_URL}/reminder`,reminder,{ headers:headers });
  }

  getById(id: number){
    const headers = new HttpHeaders({'#Token': this.userId});
    return this.http.get(`${this.API_URL}/reminder/${id}`,{ headers:headers });
  }
}
