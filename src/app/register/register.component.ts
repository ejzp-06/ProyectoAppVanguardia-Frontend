import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user/user';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  username: string;
  password: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  postUser(){

    let user = new User;
    user.Name = this.name;
    user.Username = this.username;
    user.Password = this.password;

    this.userService.post(user).subscribe(
      (res: User) => {
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    )
  }

  clearFields(){
    this.name = "";
    this.username = "";
    this.password = "";
  }

}
