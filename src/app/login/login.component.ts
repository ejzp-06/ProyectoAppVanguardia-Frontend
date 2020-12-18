import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user/user';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getUsers(){
    this.userService.get().subscribe(
      (res: User[]) => {
        this.users = res;
      },
      err =>{
        console.log(err);
      }
    )
  }

  validateLogin(): boolean {
    this.users.forEach(element => {
      if(element.Username == this.username && element.Password == this.password)
        {
          localStorage.setItem('userId', element.Id.toString());
          return true;
        }
    });

    return false;
  }

}
