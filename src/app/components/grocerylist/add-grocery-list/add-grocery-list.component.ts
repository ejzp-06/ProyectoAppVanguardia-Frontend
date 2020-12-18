import { Component, Inject, OnInit, ViewChild } from '@angular/core';

//angular
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

//models
import { List } from 'src/models/list/list';
import { Ingredients } from 'src/models/ingredients/ingredients';
import { AddIngredientdialogComponent } from '../add-ingredientdialog/add-ingredientdialog.component';

//services
import { GrocerylistService } from 'src/services/grocerylist/grocerylist.service'

@Component({
  selector: 'app-add-grocery-list',
  templateUrl: './add-grocery-list.component.html',
  styleUrls: ['./add-grocery-list.component.css']
})
export class AddGroceryListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name'];
  dataSource: MatTableDataSource<Ingredients>;
  ingredients: Ingredients[];
  ingredient: Ingredients;
  description: string;
  list: List;

  constructor(public dialog: MatDialog, private groceryListService: GrocerylistService) {
    this.dataSource = new MatTableDataSource(this.ingredients);
  }

  @ViewChild(MatSort) sort: MatSort;

  //data display
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddIngredientdialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.description = result.description;
    });
  }

  addIngredientToList(): void {
    let tmpIngredient = new Ingredients();
    tmpIngredient.Description = this.description;
    tmpIngredient.ListId
    this.ingredients.push(new Ingredients())
  }

  //data request
  postGroceryList(){
    let groceryList = new List();
    groceryList.Description = this.description;
    groceryList.Ingredients = [];
    groceryList.Name = "";
    groceryList.UserId = parseInt(localStorage.getItem("userId"),10);

    this.groceryListService.post(groceryList).subscribe(
      (res: List) =>{
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
}
