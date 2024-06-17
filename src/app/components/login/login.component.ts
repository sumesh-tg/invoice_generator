import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

import { Registration } from 'src/app/models/registration';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EncryptionService } from 'src/app/services/encryption.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router, private encryptionService: EncryptionService) {
    this.loginForm = this.fb.group({
      password: ['', [Validators.required]],
      username: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      let password = this.loginForm.value.password;
      let username = this.loginForm.value.username;
      this.userService.userLogin(username, password).then(response => {
        console.log(response);
        if (response != null) {
          console.log("Login success!");
          let encryptedData = this.encryptionService.encrypt(JSON.stringify(response));
          sessionStorage.setItem("auth_info", encryptedData);
          this.router.navigate(['/dashboard']);
        } else {
          console.log("Login failed!");
        }
      });
    }
  }

  resetForm() {
    this.loginForm.reset();
  }


}
