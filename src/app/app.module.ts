import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HornbillServicesPage} from '../pages/hornbill-services/hornbill-services';
import { RoboPage} from '../pages/robo/robo';
import { LightsPage} from '../pages/lights/lights';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HornbillServicesPage,
    RoboPage,
    LightsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HornbillServicesPage,
    RoboPage,
    LightsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
