import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EncryptionService } from 'src/app/services/encryption.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name:any;
  email:any;
  phone:any;

  constructor(private encryptionService: EncryptionService) {

  }

  ngOnInit(): void {
    let authInfo = sessionStorage.getItem("auth_info");
    if (authInfo) {
      let decryptedData = this.encryptionService.decrypt(authInfo);
      let data = JSON.parse(decryptedData);
      this.name=data.firstName+" "+data.lastName;
      this.email=data.email;
      this.phone=data.phoneNumber;
    }
  }

}
