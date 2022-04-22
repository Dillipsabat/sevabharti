import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { ContactComponent } from './component/contact/contact.component';
import { BloodbanksComponent } from './component/bloodbanks/bloodbanks.component';
import { UserloginComponent } from './component/userlogin/userlogin.component';
import { TranslatePipe } from './pipe/translate.pipe';
import { AdminpanelComponent } from './component/adminpanel/adminpanel.component';
import { DonorlistComponent } from './component/donorlist/donorlist.component';
import { BenfrequestComponent } from './component/benfrequest/benfrequest.component';
import { BenfrequestlistComponent } from './component/benfrequestlist/benfrequestlist.component';
import { BenfsignupComponent } from './component/benfsignup/benfsignup.component';
import { BloodbanklistComponent } from './component/bloodbanklist/bloodbanklist.component';
import { BloodbankpanelComponent } from './component/bloodbankpanel/bloodbankpanel.component';
import { BloodbanksignupComponent } from './component/bloodbanksignup/bloodbanksignup.component';
import { DefComponent } from './component/def/def.component';
import { DefaultComponent } from './component/default/default.component';
import { EnquirylistComponent } from './component/enquirylist/enquirylist.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { MainpageComponent } from './component/mainpage/mainpage.component';
import { MobilevalidationComponent } from './component/mobilevalidation/mobilevalidation.component';
import { OtpvalidationComponent } from './component/otpvalidation/otpvalidation.component';
import { Otpvalidation1Component } from './component/otpvalidation1/otpvalidation1.component';
import { OtpverificationComponent } from './component/otpverification/otpverification.component';
import { SignupComponent } from './component/signup/signup.component';
import { UserpanelComponent } from './component/userpanel/userpanel.component';
import { UservalidationComponent } from './component/uservalidation/uservalidation.component';
import { Uservalidation1Component } from './component/uservalidation1/uservalidation1.component';
import { FeedbacklistComponent } from './component/feedbacklist/feedbacklist.component';
import { UserlistComponent } from './component/userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminloginComponent,
    ContactComponent,
    BloodbanksComponent,
    UserloginComponent,
    TranslatePipe,
    AdminpanelComponent,
    DonorlistComponent,
    BenfrequestComponent,
    BenfrequestlistComponent,
    BenfsignupComponent,
    BloodbanklistComponent,
    BloodbankpanelComponent,
    BloodbanksignupComponent,
    DefComponent,
    DefaultComponent,
    EnquirylistComponent,
    FeedbackComponent,
    MainpageComponent,
    MobilevalidationComponent,
    OtpvalidationComponent,
    Otpvalidation1Component,
    OtpverificationComponent,
    SignupComponent,
    UserpanelComponent,
    UservalidationComponent,
    Uservalidation1Component,
    FeedbacklistComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
