import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParalaxRoutingModule } from './paralax-routing.module';
import { ParalaxMainComponent } from './components/paralax-main/paralax-main.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { MaterialModule } from "app/material/material.module";
import { ParalaxContainerComponent } from './components/paralax-container/paralax-container.component';
import { ParalaxLayerComponent } from './components/paralax-layer/paralax-layer.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ParalaxRoutingModule
  ],
  declarations: [ParalaxMainComponent, Demo1Component, ParalaxContainerComponent, ParalaxLayerComponent]
})
export class ParalaxModule { }
