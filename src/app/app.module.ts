import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { IndexComponent } from './index/index.component';
import { BleuComponent } from './bleu/bleu.component';
import { FooterComponent } from './footer/footer.component';
import { JauneComponent } from './jaune/jaune.component';
import { RougeComponent } from './rouge/rouge.component';
import { VertComponent } from './vert/vert.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    IndexComponent,
    BleuComponent,
    FooterComponent,
    JauneComponent,
    RougeComponent,
    VertComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
