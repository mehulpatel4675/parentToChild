import { Component } from '@angular/core';
import { User } from './intrefaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'childparentconnection';
  datatest = '';
  data = 10;
  updateChild() {
    this.data = Math.floor(Math.random() * 10);
    this.datatest = 'i am travel parent to child';
  }
  resuablecomponent: User[] = [
    { name: 'Mehul', phone: 9638687466 },
    { name: 'rahul', phone: 9638687488 },
    { name: 'Dhaval', phone: 9638687422 },
    { name: 'NilStark', phone: 9638687400 },
    {
      name: 'Amit',
      phone: 986985621,
      address: [
        { city: 'Navsari', pincode: 369001, state: 'guj' },
        { city: 'valsad', pincode: 369002, state: ' guj' },
      ],
    },
  ];
}
