import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

//angular material
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Register',
      urls: [
        { title: 'Register', url: '/register' },
        { title: 'Register' }
      ]
    },
    component: RegisterComponent 
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    RegisterModule
  ],
  declarations: [
    RegisterComponent,
  ]
})

export class RegisterModule { }