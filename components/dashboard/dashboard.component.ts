import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  getUser(){
    this.userService.getUser().subscribe(
      user=>{
        console.log(user);
        this.user=user;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
