import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { EncryptionService } from 'src/app/services/encryption.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;

  public registrationModel: Registration = {firstName:"",email:"" ,password:"",phoneNumber:""};

  constructor(private fb: FormBuilder,private usersService:UsersService,private encryptionService:EncryptionService) {
    this.registrationForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
      last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      phone_number : ['',[Validators.required, Validators.minLength(10),Validators.maxLength(10) ,Validators.pattern(/^[0-9]*$/)]]
    });

   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
      let firstName = this.registrationForm.value.first_name;
      let lastName = this.registrationForm.value.last_name;
      let password = this.registrationForm.value.password;
      let email = this.registrationForm.value.email;
      let phoneNumber = this.registrationForm.value.phone_number;
      this.registrationModel =  {firstName:firstName,email:email ,password:password,phoneNumber:phoneNumber,lastName:lastName};
      this.usersService.createUser(this.registrationModel).then(response =>{
        alert('User registered successfully!');
        console.log("Registered Data :: => ",response);
        this.resetForm();
      });

      // Test Encryption
      let encryptedData=this.encryptionService.encrypt(JSON.stringify(this.registrationModel));
      console.log("Encrypted data => ",encryptedData);
      let decryptedData = this.encryptionService.decrypt(encryptedData);
      console.log("Decrypted data => ",decryptedData);
      
      
      
    } else {
      console.log('Form not valid');
    }
  }
  resetForm(){
    this.registrationForm.reset();
  }

}
