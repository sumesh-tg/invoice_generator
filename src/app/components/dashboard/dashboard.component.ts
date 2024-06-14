import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    //this.usersService.createUser();
    // console.log("All data",this.usersService.fetchAllusers());
    this.usersService.fetchAllusers().then((users)=>{
      console.log("All data",users);
    })
    
  }

}
