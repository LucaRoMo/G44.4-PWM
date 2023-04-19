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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
