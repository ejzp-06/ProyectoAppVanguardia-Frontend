import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

//models
import { Ingredients } from 'src/models/ingredients/ingredients'

//services
import { IngredientService } from 'src/services/ingredient/ingredient.service'

@Component({
  selector: 'app-add-ingredientdialog',
  templateUrl: './add-ingredientdialog.component.html',
  styleUrls: ['./add-ingredientdialog.component.css']
})
export class AddIngredientdialogComponent implements OnInit {

  description: string;
  listId: number;
  constructor(
    public dialogRef: MatDialogRef<AddIngredientdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private IngredientService: IngredientService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  acceptDialog(): void {
    this.dialogRef.close({description: this.description});
  }
  ngOnInit(): void {
  }

  //data requests
  postIngredient(){
    let ingredient = new Ingredients();
    ingredient.Description = this.description;
    ingredient.ListId = this.listId;

    this.IngredientService.post(ingredient).subscribe(
     (res: Ingredients) => {
       console.log(res);
     },
     err =>{
       console.log(err);
     }
    )
  }
}
