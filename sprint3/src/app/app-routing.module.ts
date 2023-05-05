import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MiAcademiaComponent} from "./pages/mi-academia/mi-academia.component";
import {InformationPageComponent} from "./components/information-page/information-page.component";

const routes: Routes = [
  {path:'miAcademia',component: MiAcademiaComponent},
  {path:'información', component: InformationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
