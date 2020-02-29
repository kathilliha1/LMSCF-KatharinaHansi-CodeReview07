import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { TravelpageComponent } from './travelpage/travelpage.component';
import { TraveldetailsComponent } from './traveldetails/traveldetails.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [{
  path: '', component: HomepageComponent
}, {
  path: 'trips/:tripsId', component: TravelpageComponent
}, {
  path: 'travelpage', component: TravelpageComponent
}, {
  path: 'blogpage', component: BlogpageComponent
}, {
  path: 'cart', component: CartComponent
}, {
  path: 'traveldetails', component: TraveldetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
