import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TraventureComponent } from './traventure/traventure.component';
import { JoinNowComponent } from './join-now/join-now.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ContactComponent,
    AboutComponent,
    GalleryComponent,
    ServicesComponent,
    LoginComponent,
    RegisterComponent,
    SubscribeComponent,
    TraventureComponent,
    JoinNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
