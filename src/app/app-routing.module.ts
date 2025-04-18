import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdvertisersComponent } from './pages/advertisers/advertisers.component';
import { PublishersComponent } from './pages/publishers/publishers.component';
import { AntiFraudComponent } from './pages/solutions/anti-fraud/anti-fraud.component';
import { IdentifyOptimizeComponent } from './pages/solutions/identify-optimize/identify-optimize.component';
import { MonetizationComponent } from './pages/solutions/monetization/monetization.component';
import { RetargetingComponent } from './pages/solutions/retargeting/retargeting.component';
import { TechnologyComponent } from './pages/solutions/technology/technology.component';
import { UserAcquisitionComponent } from './pages/solutions/user-acquisition/user-acquisition.component';
import { FaqComponent } from './pages/about/faq/faq.component';
import { BlogComponent } from './pages/about/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'advertiser', component: AdvertisersComponent},
  {path: 'publishers', component: PublishersComponent},

  // Solutions sub links
  {path: 'solutions/anti-fraud', component: AntiFraudComponent},
  {path: 'solutions/identify-&-optimize', component: IdentifyOptimizeComponent},
  {path: 'solutions/monetization', component: MonetizationComponent},
  {path: 'solutions/retargeting', component: RetargetingComponent},
  {path: 'solutions/technology', component: TechnologyComponent},
  {path: 'solutions/user-acquisition', component: UserAcquisitionComponent},

  // About sub links
  {path: 'about/faq', component: FaqComponent},
  {path: 'about/blog', component: BlogComponent},

  // Contact Us
  {path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
