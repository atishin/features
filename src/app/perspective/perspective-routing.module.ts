import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerspectiveMainComponent } from "app/perspective/components/perspective-main/perspective-main.component";
import { Demo1Component } from "app/perspective/components/demo1/demo1.component";
import { Demo2Component } from "app/perspective/components/demo2/demo2.component";
import { Demo3Component } from "app/perspective/components/demo3/demo3.component";

const routes: Routes = [
    {
        path: '',
        component: PerspectiveMainComponent,
        children: [
            {
                path: 'demo1',
                component: Demo1Component
            },
            {
                path: 'demo2',
                component: Demo2Component
            },
            {
                path: 'demo3',
                component: Demo3Component
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PerspectiveRoutingModule { }
