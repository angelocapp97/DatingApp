import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Output()
  cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log("Logged in successfully");
      },
      error => {
        console.log("Failed to login");
      }
    );
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
        console.log("Registered successfully");
        // this.login();
      }, error => {
        console.error('Error: ' + error.error );
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
