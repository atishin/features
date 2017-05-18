import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DescriptionComponent } from './components/description/description.component';
import { AppRoutingModule } from "app/app.routing.module";
import { MaterialModule } from "app/material/material.module";

@NgModule({
    declarations: [
        AppComponent,
        DescriptionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
