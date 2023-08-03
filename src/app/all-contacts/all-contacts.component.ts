import { Component } from '@angular/core';
import { concat } from 'rxjs';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.scss'],
})
export class AllContactsComponent {
  contacts?: Contact[];

  constructor() {
    this.contacts = [
      {
        name: 'magdy',
        phoneNumber: +201277348662,
        email: 'magdy@gmail.com',
      },
      {
        name: 'hassan',
        phoneNumber: +201277348662,
        email: 'hassan@gmail.com',
      },
      {
        name: 'sayed',
        phoneNumber: +201277348662,
        email: 'sayed@gmail.com',
      },
    ];
  }
  deleteContact(filtered: any) {
    this.contacts?.splice(
      this.contacts?.findIndex((concat) => concat.email == filtered),
      1
    );
  }

  add(name: String, number: String, email: String) {
    this.contacts?.push({
      name: name,
      phoneNumber: Number(number),
      email: email,
    });
  }
  onSelect(sele: number) {
    console.log(sele);
  }
}
