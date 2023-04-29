import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { InformationCardComponent } from './information-card/information-card.component';
import { EmailFieldComponent } from './email-field/email-field.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { VerticalCardComponent } from './vertical-card/vertical-card.component';
import {MessageComponent} from "./message/message.component";
import {ChatComponent} from "./chat/chat.component";
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactIconTextComponent } from './contact-icon-text/contact-icon-text.component';
import { NameFieldComponent } from './name-field/name-field.component';

import { HorizontalCardComponent } from './horizontal-card/horizontal-card.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NoticiasPrincipalComponent } from './noticias-principal/noticias-principal.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import {UserListComponent} from "./user-list/user-list.component";
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { CheckboxFieldComponent } from './checkbox-field/checkbox-field.component';
import { LogInComponent } from './log-in/log-in.component';
import {MiAcademiaComponent} from "./pages/mi-academia/mi-academia.component";

@NgModule({
  declarations: [
    MiAcademiaComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
