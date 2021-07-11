import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { DeleteVisitorComponent } from './delete-visitor/delete-visitor.component';
import { VisitorsComponent } from './visitors/visitors.component';

const routes: Routes = [
  {
    path:'',
    component:VisitorsComponent
  },
  {
    path:'add',
    component:AddVisitorComponent
  },
  {
  path:'delete',
  component:DeleteVisitorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
