import { Component, OnInit } from '@angular/core';
import { Reminder } from 'src/models/reminder/reminder';
import { ReminderService } from 'src/services/reminder/reminder.service';

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.css']
})
export class AddReminderComponent implements OnInit {

  descripcion: string;
  mensaje: string;
  fecha: Date;

  constructor(private reminderService: ReminderService) { }

  ngOnInit(): void {
  }

  postReminder(){
    let reminder = new Reminder();
    reminder.Description = this.descripcion;
    reminder.Message = this.mensaje;
    reminder.DateDue = this.fecha;
    reminder.UserId = parseInt(localStorage.getItem("userId"),10);
    this.reminderService.post(reminder).subscribe(
      (res: Reminder) =>{
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

}
