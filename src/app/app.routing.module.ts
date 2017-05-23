import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from "app/components/description/description.component";

const routes: Routes = [
    {
        path: '',
        component: DescriptionComponent,
    },
    {
        path: 'perspective',
        loadChildren: 'app/perspective/perspective.module#PerspectiveModule'
    },
    {
        path: 'paralax',
        loadChildren: 'app/paralax/paralax.module#ParalaxModule'
    }
]

@NgModule({
  declarations: [
  ],
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  providers: [],
})
export class AppRoutingModule { }
