import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { FiltrationComponentComponent } from './filtration-component/filtration-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AllContactsComponent,
    FiltrationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
