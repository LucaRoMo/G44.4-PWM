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
import { HorizontalCardComponent } from './horizontal-card/horizontal-card.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NoticiasPrincipalComponent } from './noticias-principal/noticias-principal.component';

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
    HorizontalCardComponent,
    ChatPageComponent,
    UserCardComponent,
    HomePageComponent,
    NoticiasPrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
