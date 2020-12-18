import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/models/recipes/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  API_URL = "https://localhost:44320/api";

  get(){
    return this.http.get(`${this.API_URL}/recipe`)
  }

  post(recipe: Recipe){
    return this.http.post(`${this.API_URL}/recipe`,recipe);
  }

  getById(id: number){
    return this.http.get(`${this.API_URL}/recipe/${id}`);
  }
}
