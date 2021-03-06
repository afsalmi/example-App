import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConstantService } from './structure/constants/constant.service';
import { TopBarComponent } from './structure/components/top-bar/top-bar.component';
import { MenuLeftComponent } from './structure/components/menu-left/menu-left.component';
import { FooterComponent } from './structure/components/footer/footer.component';
import { CommonBarComponent } from './structure/components/common-bar/common-bar.component';

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { Ng5BreadcrumbModule } from 'ng5-breadcrumb';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './modules/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuLeftComponent,
    FooterComponent,
    CommonBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5BreadcrumbModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule,
    SharedModule
  ],
  providers: [
    Title,
    ConstantService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
  }
}
