import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/reuseableComponents/header/header.component';
import { FooterComponent } from './shared/reuseableComponents/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AdvertisersComponent } from './pages/advertisers/advertisers.component';
import { PublishersComponent } from './pages/publishers/publishers.component';
import { UserAcquisitionComponent } from './pages/solutions/user-acquisition/user-acquisition.component';
import { IdentifyOptimizeComponent } from './pages/solutions/identify-optimize/identify-optimize.component';
import { MonetizationComponent } from './pages/solutions/monetization/monetization.component';
import { TechnologyComponent } from './pages/solutions/technology/technology.component';
import { AntiFraudComponent } from './pages/solutions/anti-fraud/anti-fraud.component';
import { RetargetingComponent } from './pages/solutions/retargeting/retargeting.component';
import { FaqComponent } from './pages/about/faq/faq.component';
import { BlogComponent } from './pages/about/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdvertisersComponent,
    PublishersComponent,
    UserAcquisitionComponent,
    IdentifyOptimizeComponent,
    MonetizationComponent,
    TechnologyComponent,
    AntiFraudComponent,
    RetargetingComponent,
    FaqComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
