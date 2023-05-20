import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HeaderDirective } from './directives/header.directive';
import { RowDirective } from './directives/row.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderDirective,
    RowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
