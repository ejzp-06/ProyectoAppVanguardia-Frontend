import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//modules
import { GroceryListModule } from './components/grocerylist/grocerylist.module'
import { MyRemindersModule} from './components/my-reminders/my-reminders.module'


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {
    path: '', component: MainComponent,
    children: [
       {path: 'grocerylist', loadChildren: ()=> GroceryListModule},
       {path: 'reminder', loadChildren: ()=> MyRemindersModule}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }