import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MiAcademiaComponent} from "./pages/mi-academia/mi-academia.component";

const routes: Routes = [
  {path:'miAcademia',component: MiAcademiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
