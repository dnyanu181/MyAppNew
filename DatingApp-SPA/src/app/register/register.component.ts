import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

@Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private _auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }
  register() {
    this._auth.register(this.model).subscribe(() => {
       this.alertify.success('register successfully');
    }, error => {
      this.alertify.error(error);
  });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
