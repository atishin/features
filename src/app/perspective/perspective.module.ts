import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerspectiveRoutingModule } from './perspective-routing.module';
import { PerspectiveMainComponent } from "app/perspective/components/perspective-main/perspective-main.component";
import { MaterialModule } from "app/material/material.module";
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './components/demo3/demo3.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        PerspectiveRoutingModule
    ],
    declarations: [PerspectiveMainComponent, Demo1Component, Demo2Component, Demo3Component]
})
export class PerspectiveModule { }
