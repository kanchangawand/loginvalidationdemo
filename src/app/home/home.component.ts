import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userDisplayName ='';

  constructor(private router :Router) { }

  ngOnInit() {
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    if(!this.userDisplayName){
      this.router.navigateByUrl('/login');
    }

  }

  onLogout(){
    sessionStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }

}
