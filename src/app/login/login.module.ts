import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

//angular material
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

const routes: Routes = [ 
  {
    path: '',
    data: {
      title: 'Login',
      urls: [
        { title: 'Login', url: '/login' },
        { title: 'Login' }
      ]
    },
    component: LoginComponent 
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
  declarations: [
    LoginComponent,
  ],
  providers: [
  ]
})

export class LoginModule { }