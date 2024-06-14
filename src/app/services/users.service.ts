import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import 'firebase/compat/firestore';
import { Registration } from '../models/registration';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  USERS_COLLECTION_NAME = environment.usersCollection;
  db;
  users:any = [];
  constructor() { 
     this.db = !firebase.apps.length
    ? firebase.initializeApp(environment.firebaseConfig)
    : firebase.app();
  }
  async createUser(registrationModel:Registration) { 
    console.log("Insed create user");
    
    await this.db.firestore().collection(this.USERS_COLLECTION_NAME).add({
      firstName : registrationModel.firstName,
      lastName : registrationModel.lastName,
      dob : registrationModel.dob?registrationModel.dob:"",
      age : registrationModel.age?registrationModel.age:"",
      company : registrationModel.company?registrationModel.company:"",
      address : registrationModel.address?registrationModel.address:"",
      zone : registrationModel.zone?registrationModel.zone:"",
      lastLogin : "",
      lockUser:"false",
      status:"active",
      password : registrationModel.password,
      email: registrationModel.email,
      phoneNumber:registrationModel.phoneNumber
    });
    return registrationModel;
  }
  async fetchAllusers() { 
    const snapshot = await this.db.firestore().collection(this.USERS_COLLECTION_NAME).get();
    snapshot.forEach((doc) => this.users.push(doc.data()));
    return this.users;
  }
}
