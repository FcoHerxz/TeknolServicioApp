import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';

import { AddPage } from '../pages/add/add';
import { UpdatePage } from '../pages/update/update';
import { NosotrosPage } from '../pages/nosotros/nosotros';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TeknolServiceProvider } from '../providers/teknol-service/teknol-service';
import { VarsGlobalesProvider } from '../providers/vars-globales/vars-globales';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MyApp,
    ListPage,
    HomePage,
    
    AddPage,
    UpdatePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddPage,
    UpdatePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TeknolServiceProvider,
    VarsGlobalesProvider,
    
  ]
})
export class AppModule {}
