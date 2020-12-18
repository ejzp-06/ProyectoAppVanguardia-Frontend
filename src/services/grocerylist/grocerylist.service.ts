import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrocerylistService {

  constructor(private http: HttpClient) { }

  API_URL = "https://localhost:44320/api";
  userId = localStorage.getItem("userId");

  get(){
    const headers = new HttpHeaders({'#Token': this.userId});
    return this.http.get(`${this.API_URL}/grocerylist`,{ headers:headers });
  }

  getIngredientsFromList(userId:number, listId: number){
    const headers = new HttpHeaders({'#Token': this.userId});
    return this.http.get(`${this.API_URL}/grocerylist/${listId}/ingredient`,{ headers:headers });
  }

  post(groceryList){
    const headers = new HttpHeaders({'#Token': this.userId});
    return this.http.post(`${this.API_URL}/grocerylist`,groceryList,{ headers:headers });
  }

  getById(groceryListId: number){
    const headers = new HttpHeaders({'#Token': this.userId});
    return this.http.get(`${this.API_URL}/grocerylist/${groceryListId}`,{ headers:headers });
  }
}
