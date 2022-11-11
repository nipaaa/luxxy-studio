import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutStudioComponent } from './about-studio/about-studio.component';
import { OfferComponent } from './offer/offer.component';
import { ServicesComponent } from './services/services.component';
import { GellaryComponent } from './gellary/gellary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutStudioComponent,
    OfferComponent,
    ServicesComponent,
    GellaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
