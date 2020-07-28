import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpInterceptor } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BsDropdownModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { from } from 'rxjs';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
  declarations: [AppComponent, NavComponent, RegisterComponent, HomeComponent, MemberListComponent, ListsComponent, MessagesComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, BsDropdownModule.forRoot(), RouterModule.forRoot(appRoutes), PdfViewerModule],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
