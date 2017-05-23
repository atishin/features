import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParalaxMainComponent } from "app/paralax/components/paralax-main/paralax-main.component";
import { Demo1Component } from "app/paralax/components/demo1/demo1.component";

const routes: Routes = [
  {
    path: '',
    component: ParalaxMainComponent,
    children: [
      {
        path: 'demo1',
        component: Demo1Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParalaxRoutingModule { }
