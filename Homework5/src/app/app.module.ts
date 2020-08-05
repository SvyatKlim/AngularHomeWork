import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { WorksComponent } from './works/works.component';
import { UsersComponent } from './works/users/users.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { TaskComponent } from './works/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    WorksComponent,
    UsersComponent,
    CenzorComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
