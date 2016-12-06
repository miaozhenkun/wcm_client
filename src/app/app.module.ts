import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UtilModule } from './common/util/util.module';
import { AppRoutingModule } from './app-routing.module';
import { DemoModule } from './demo/demo.module';
import { WCMModule } from './wcm/wcm.module';
import { SystemModule } from './system/system.module';

import { AppComponent } from './app.component';

import { UserLoginComponent }            from './common/security/user-login.component';
import { HomeComponent }            from './common/home/home.component';
import { PageNotFoundComponent }    from './common/page-not-found/page-not-found.component';

import { UserService} from './common/security/user.service'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UtilModule,
    AppRoutingModule,
    DemoModule,
    WCMModule,
    SystemModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserLoginComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
