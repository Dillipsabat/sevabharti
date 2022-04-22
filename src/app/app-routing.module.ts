import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { AdminpanelComponent } from './component/adminpanel/adminpanel.component';
import { BenfrequestComponent } from './component/benfrequest/benfrequest.component';
import { BenfrequestlistComponent } from './component/benfrequestlist/benfrequestlist.component';
import { BenfsignupComponent } from './component/benfsignup/benfsignup.component';
import { BloodbanklistComponent } from './component/bloodbanklist/bloodbanklist.component';
import { BloodbankpanelComponent } from './component/bloodbankpanel/bloodbankpanel.component';
import { BloodbanksComponent } from './component/bloodbanks/bloodbanks.component';
import { ContactComponent } from './component/contact/contact.component';
import { DonorlistComponent } from './component/donorlist/donorlist.component';
import { EnquirylistComponent } from './component/enquirylist/enquirylist.component';
import { FeedbacklistComponent } from './component/feedbacklist/feedbacklist.component';
import { HomeComponent } from './component/home/home.component';
import { MobilevalidationComponent } from './component/mobilevalidation/mobilevalidation.component';
import { OtpvalidationComponent } from './component/otpvalidation/otpvalidation.component';
import { Otpvalidation1Component } from './component/otpvalidation1/otpvalidation1.component';
import { OtpverificationComponent } from './component/otpverification/otpverification.component';
import { SignupComponent } from './component/signup/signup.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { UserloginComponent } from './component/userlogin/userlogin.component';
import { UserpanelComponent } from './component/userpanel/userpanel.component';
import { UservalidationComponent } from './component/uservalidation/uservalidation.component';
import { Uservalidation1Component } from './component/uservalidation1/uservalidation1.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bloodbanks', component: BloodbanksComponent },
  {path:'bloodbankpanel',component:BloodbankpanelComponent},
  { path: 'userlogin', component: UserloginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  {
    path: 'adminpanel', component: AdminpanelComponent,
    children: [
      { path: 'donorlist', component: DonorlistComponent },
      { path: 'benfrequestlist', component: BenfrequestlistComponent },
      { path: 'bloodbanklist', component: BloodbanklistComponent },
      { path: 'feedbacklist', component: FeedbacklistComponent },
      { path: 'enquirylist', component: EnquirylistComponent },
      { path: 'userlist', component: UserlistComponent }
    ]
  },
  { path: 'mobilevalidation', component: MobilevalidationComponent },
  { path: 'otpverification', component: OtpverificationComponent },
  { path: 'uservalidation', component: UservalidationComponent },
  { path: 'uservalidation1', component: Uservalidation1Component },
  { path: 'otpvalidation', component: OtpvalidationComponent },
  { path: 'otpvalidation1', component: Otpvalidation1Component },
  { path: 'benfsignup', component: BenfsignupComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'userpanel', component: UserpanelComponent,
    children: [
      { path: 'benfrequest', component: BenfrequestComponent },
    ]
  },
  {
    path: 'userlogin', component: UserloginComponent,
    children: [
      { path: 'signup', component: SignupComponent }
    ]
  },
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
