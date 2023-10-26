import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor( private formBuilder: FormBuilder,) { }
  checkoutForm:FormGroup = this.formBuilder.group({
    username: '',
    password: ''
  });
  ngOnInit(): void {
  }
  onSubmit(){
   console.log(this.checkoutForm.value.username);
  }

}
