import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule}  from '@angular/router';
import { AddressComponent } from './address/address.component';
import { DepartmentComponent } from './department/department.component';
import { ResultComponent } from './result/result.component';
import { TestComponent } from './test/test.component';
import { DeparmentnameComponent } from './deparmentname/deparmentname.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddressComponent,
    DepartmentComponent,
    ResultComponent,
    TestComponent,
    DeparmentnameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
