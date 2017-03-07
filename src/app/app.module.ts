import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AccordionComponent } from './accordion/accordion.component';
import { MaterialModule } from "@angular/material";
import { AccordionRowComponent } from './accordion-row/accordion-row.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionRowComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
