import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { InformationCardComponent } from './components/information-card/information-card.component';
import { EmailFieldComponent } from './components/email-field/email-field.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { VerticalCardComponent } from './components/vertical-card/vertical-card.component';
import {MessageComponent} from "./components/message/message.component";
import {ChatComponent} from "./components/chat/chat.component";
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactIconTextComponent } from './components/contact-icon-text/contact-icon-text.component';
import { NameFieldComponent } from './components/name-field/name-field.component';

import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NoticiasPrincipalComponent } from './components/noticias-principal/noticias-principal.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import {UserListComponent} from "./components/user-list/user-list.component";
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { PasswordFieldComponent } from './components/password-field/password-field.component';
import { CheckboxFieldComponent } from './components/checkbox-field/checkbox-field.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MiAcademiaComponent } from "./pages/mi-academia/mi-academia.component";
import { InformationPageComponent } from "./pages/information-page/information-page.component";
import { ImageCarouselComponent } from "./components/image-carousel/image-carousel.component";

import { initializeApp,provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {AuthService} from "./shared/services/auth.service";
import { FilterComponent } from './components/filter/filter.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InformationCardComponent,
    EmailFieldComponent,
    HeaderComponent,
    ButtonComponent,
    VerticalCardComponent,
    MessageComponent,
    ChatComponent,
    ButtonGroupComponent,
    ContactPageComponent,
    ContactIconTextComponent,
    NameFieldComponent,
    HorizontalCardComponent,
    ChatPageComponent,
    UserCardComponent,
    HomePageComponent,
    NoticiasPrincipalComponent,
    UserListPageComponent,
    UserListComponent,
    LogInPageComponent,
    PasswordFieldComponent,
    CheckboxFieldComponent,
    LogInComponent,
    InformationPageComponent,
    MiAcademiaComponent,
    ImageCarouselComponent,
    FilterComponent,
    ScheduleComponent,
    SchedulePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
