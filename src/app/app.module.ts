import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './template/home/home.component';
import { NavberComponent } from './template/navber/navber.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { C3boardComponent } from './template/c3board/c3board.component';
import { SeprobeComponent } from './template/seprobe/seprobe.component';
import { TurnstileComponent } from './template/turnstile/turnstile.component';
import { PcManageComponent } from './template/pc/pc-manage/pc-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavberComponent,
    DashboardComponent,
    C3boardComponent,
    SeprobeComponent,
    TurnstileComponent,
    PcManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
