import { Component, OnInit, ViewChild } from '@angular/core';

//modelos
import { List } from '../../../models/list/list';

//services
import { GrocerylistService } from '../../../services/grocerylist/grocerylist.service';

//material
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent implements OnInit {

  displayedColumns: string[] = ['position', 'description', 'actions'];
  dataSource: MatTableDataSource<List>;
  list: List[];
  
  constructor(private GrocerylistService: GrocerylistService, private userService: UserService) {
    this.dataSource = new MatTableDataSource(this.list);
  }


  //data display
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

  //data requests
  getAllGroceryListsFromUser(){
    this.userService.getAllListsFromUser().subscribe(
      (res: List[]) =>{
        this.list = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  getGroceryListById(id: number){
    this.GrocerylistService.getById(id).subscribe(
      (res: List[]) =>{

      },
      err => {
        console.log(err);
      }
    )
  }


}
