import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customersList:any = [{id:"1",name:"Sumesh TG",phone:"8089007012",address:"pathumukku",email:"sumeshzoft@gmail.com",age:"20",status:"active"}]
  vendor:any={selected:""}

  constructor() {
    let custoner:Customer = {id:"2",name:"Pradeep K",phone:"9847123155",address:"chenkara",email:"test@gmail.com",age:"20",status:"active"}
    this.customersList.push(custoner);
   }

  ngOnInit(): void {
  }

  findPlan(){

  }

  findStatus(){

  }

  deactivateCustomer(customer:any){

  }

  deleteCustomer(customer:any){

  }

}
