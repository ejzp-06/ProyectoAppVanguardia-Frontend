import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredients } from 'src/models/ingredients/ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) { }

  API_URL = "https://localhost:44320/api";
  userId = localStorage.getItem("userId");

  post(ingredient: Ingredients){
    const headers = new HttpHeaders({'#Token': this.userId});
    return this.http.post(`${this.API_URL}/ingredient`,ingredient,{ headers:headers });
  }

  getById(ingredientId: number){
    const headers = new HttpHeaders({'#Token': this.userId});
    return this.http.get(`${this.API_URL}/ingredient/${ingredientId}`,{ headers:headers });
  }
}
