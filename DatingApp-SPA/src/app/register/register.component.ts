import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { error } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

@Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }
  register() {
    this._auth.register(this.model).subscribe(() => {
       console.log('register successfully');
    }, error => {
      console.log(error);
  });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}