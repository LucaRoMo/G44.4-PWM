import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MiAcademiaComponent} from "./pages/mi-academia/mi-academia.component";
import {InformationPageComponent} from "./pages/information-page/information-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {UserListPageComponent} from "./pages/user-list-page/user-list-page.component";
import {ChatPageComponent} from "./pages/chat-page/chat-page.component";
import {LogInPageComponent} from "./pages/log-in-page/log-in-page.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";

const routes: Routes = [
  {path: 'miAcademia', component: MiAcademiaComponent},
  {path: 'informacion', component: InformationPageComponent},
  {path: 'contacto', component: ContactPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'lista', component: UserListPageComponent},
  {path: 'chat', component: ChatPageComponent},
  {path: 'log-in', component: LogInPageComponent},
  {path: 'schedule', component: ScheduleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
