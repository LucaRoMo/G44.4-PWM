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


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InformationCardComponent,
    EmailFieldComponent,
    HeaderComponent,
    ButtonComponent,
    VerticalCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
