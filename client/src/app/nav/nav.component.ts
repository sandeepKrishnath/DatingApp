import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model : any = {};
  loggedIn = false;
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }
  login(){

    this.accountService.login(this.model).subscribe({
      next:(response) =>{console.log(response); this.loggedIn = true; console.log(this.loggedIn)},
      error: (error)=>{console.log(error)},
      complete : () => console.log("Token")
    });
  }

  logout(){
    this.loggedIn = false;
  }

}
