import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MiAcademiaComponent} from "./pages/mi-academia/mi-academia.component";
import {InformationPageComponent} from "./components/information-page/information-page.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {UserListPageComponent} from "./components/user-list-page/user-list-page.component";
import {ChatPageComponent} from "./components/chat-page/chat-page.component";

const routes: Routes = [
  {path: 'miAcademia', component: MiAcademiaComponent},
  {path: 'informacion', component: InformationPageComponent},
  {path: 'contacto', component: ContactPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'lista', component: UserListPageComponent},
  {path: 'chat', component: ChatPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
