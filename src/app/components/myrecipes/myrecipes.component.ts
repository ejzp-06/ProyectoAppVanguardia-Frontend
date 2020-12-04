import { Component, OnInit, ViewChild } from '@angular/core';

//modelos
import { Recipe } from '../../../models/recipes/recipe'

//angular material
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.component.html',
  styleUrls: ['./myrecipes.component.css']
})
export class MyrecipesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'description', 'fecha'];
  dataSource: MatTableDataSource<Recipe>;
  list: null;
  
  constructor() {
    this.dataSource = new MatTableDataSource(this.list);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
