import { Component, OnInit, ViewChild } from '@angular/core';

//modelos
import { Reminder } from 'src/models/reminder/reminder';

//services
import { ReminderService } from 'src/services/reminder/reminder.service';

//angular material
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-my-reminders',
  templateUrl: './my-reminders.component.html',
  styleUrls: ['./my-reminders.component.css']
})
export class MyRemindersComponent implements OnInit {

  displayedColumns: string[] = ['position', 'message', 'description', 'date'];
  dataSource: MatTableDataSource<Reminder>;
  list: Reminder[];

  constructor(private reminderService: ReminderService, private userService: UserService) {
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
  getAllRemindersFromUser() {
    this.userService.getAllRemindersFromUser().subscribe(
      (res: Reminder[]) => {
        this.list = res;
      },
      err => {
        console.log(err);
      })
  }

  getReminderById(id: number){
    this.reminderService.getById(id).subscribe(
      (res: Reminder) => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

}


