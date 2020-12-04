import { Component, OnInit, ViewChild } from '@angular/core';

//modelos
import { Reminder } from '../../../models/reminder/reminder'

//angular material
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-my-reminders',
  templateUrl: './my-reminders.component.html',
  styleUrls: ['./my-reminders.component.css']
})
export class MyRemindersComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'description', 'fecha'];
  dataSource: MatTableDataSource<Reminder>;
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
