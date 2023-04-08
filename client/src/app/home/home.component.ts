import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /**
   *
   */
  constructor(private http : HttpClient) {
      
  }
  ngOnInit(): void {
    this.getUsers();
  }  
  registerMode = false;
  users: any;

  getUsers(){
    this.http.get('https://localhost:7217/api/users/').subscribe({
      next: (response) => {this.users = response},
      error: (error) => {console.log(error)},
      complete: () => {console.log('The Request has completed')},
    });
  }

  registerToggle(){
    this.registerMode  = !this.registerMode;
  }

  cancelRegisterMode(event : boolean){
    this.registerMode = event;
  }
}
