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
  foundContacts?: Contact[];
  typeOfSearch: number = 1;
  searchKey!: String;

  constructor() {
    this.foundContacts = this.contacts;
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
    this.typeOfSearch = sele;
    console.log(this.typeOfSearch);
  }
  searchingKey(value: any) {
    this.searchKey = value;
    //console.log(this.searchKey);
    if (this.typeOfSearch == 1) {
      this.foundContacts = this.contacts?.filter(
        (contact) => contact.name == value
      );
    } else if (this.typeOfSearch == 2) {
      this.foundContacts = this.contacts?.filter(
        (contact) => contact.phoneNumber == value
      );
    } else if (this.typeOfSearch == 0) {
      this.foundContacts = this.contacts;
    }

    console.log(this.foundContacts);
  }
}
