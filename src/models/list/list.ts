import { Ingredients } from '../ingredients/ingredients';

export class List {
    Id: number;
    UserId: number;
    Name: string;
    Description: string;
    Ingredients: Ingredients[];
}
