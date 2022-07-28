import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewhallComponent } from './newhall/newhall.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HallComponent } from './hall/hall.component';
import { HeaderComponent } from './header/header.component';
import { EditHallComponent } from './edit-hall/edit-hall.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NewhallComponent,
    HallComponent,
    HeaderComponent,
    EditHallComponent,
    FooterComponent,
    AdminLoginComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
