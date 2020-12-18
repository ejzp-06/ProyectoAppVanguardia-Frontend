import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//modules
import { GroceryListModule } from './components/grocerylist/grocerylist.module';
import { MyRemindersModule} from './components/my-reminders/my-reminders.module';
import { MyRecipesModule } from './components/myrecipes/myrecipes.module';
import { AddGroceryListModule } from './components/grocerylist/add-grocery-list/add-grocery-list.module';
import { AddRemindersModule } from './components/my-reminders/add-reminder/add-reminder.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {
    path: '', component: MainComponent,
    children: [
       {path: 'grocerylist', loadChildren: ()=> GroceryListModule},
       {path: 'reminder', loadChildren: ()=> MyRemindersModule},
       {path: 'recipes', loadChildren: ()=> MyRecipesModule},
       {path: 'addGrocerylist', loadChildren: ()=> AddGroceryListModule},
       {path: 'addReminder', loadChildren: ()=> AddRemindersModule}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }