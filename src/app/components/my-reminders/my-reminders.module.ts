import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MyRemindersComponent } from './my-reminders.component';

//angular material
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { MatSortModule } from '@angular/material/sort'; 
import { MatDialogModule} from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'MyReminders',
      urls: [
        { title: 'MyReminders', url: '/myreminders' },
        { title: 'MyReminders' }
      ]
    },
    component: MyRemindersComponent 
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  declarations: [
    MyRemindersComponent,
  ],
  providers: [
  ]
})

export class MyRemindersModule { }