import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncryptionService } from 'src/app/services/encryption.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: any;
  email: any;
  phone: any;

  constructor(private encryptionService: EncryptionService,private router: Router) {

  }

  ngOnInit(): void {
    let authInfo = sessionStorage.getItem("auth_info");
    if (authInfo) {
      let decryptedData = this.encryptionService.decrypt(authInfo);
      let data = JSON.parse(decryptedData);
      this.name = data.firstName + " " + data.lastName;
      this.email = data.email;
      this.phone = data.phoneNumber;
    }
  }

  handleSignOut():void{
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
