import { Ingredients } from '../ingredients/ingredients';

export class Recipe {
    Id: number;
    UserId: number;
    Description: string;
    Ingredients: Ingredients[];
}
