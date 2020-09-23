import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  hide:boolean= true;

  constructor(private router :Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        username : new FormControl('', [Validators.required, Validators.minLength(6)]),
        password : new FormControl( '', [Validators. required, Validators.minLength(6) ])

      }

    );
  }

  onLogin(){
    console.log(this.loginForm.value);
    console.log(this.loginForm.value.username);
    if(this.loginForm.value.username != '' && this.loginForm.value.password != ''){
      sessionStorage.setItem('loggedUser',this.loginForm.value.username);
       this.router.navigateByUrl('/home');
    }
    
  }

  hidepassword(){
    this.hide = !this.hide;
  }

}
