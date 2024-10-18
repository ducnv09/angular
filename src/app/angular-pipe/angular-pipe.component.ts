import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrl: './angular-pipe.component.css'
})
export class AngularPipeComponent {
  currentDate = new Date();

  user = {
    name: 'Chau',
    age: 29
  }

  // time = 0;
  interval$ = interval(1000);

  // ngOnInit() {
  //   this.interval$.subscribe(val => {
  //     this.time = val //tăng dần biến time sau 1s
  //   });
  // }


  //Order, Company, Author
  //AddressLike
  addr = {
    address1: "123 Some St",
    address2: "STE100",
    city: "Acme",
    state: "State",
    zip: "12345",
    country: "US",
  };

  users = [
    {
      name: "Tiep Phan",
      age: 30
    },
    {
      name: "Trung Vo",
      age: 28
    },
    {
      name: "Chau Tran",
      age: 29
    },
    {
      name: "Tuan Anh",
      age: 16
    }
  ];

  formatAddress(addr: any) {
    // console.log('function run', addr);
    return addr.address1 + " " +
          addr.address2 + " " +
          addr.city + " " +
          addr.state + " " + 
          addr.zip + " " +
          addr.country;
  }

  addUser() {
      this.users.push({
        name: 'New user', age: 30 
      })

      // this.users = [...this.users, {name: 'new user', age: 30}];
  }
}
