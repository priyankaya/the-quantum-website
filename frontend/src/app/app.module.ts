import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { GetHelpComponent } from './components/get-help/get-help.component';
import { HomeComponent } from './components/home/home.component';
import { OrderConfirmedComponent } from './components/order-confirmed/order-confirmed.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AsideOverviewComponent } from './components/partials/aside-overview/aside-overview.component';
import { BackgroundShowcaseComponent } from './components/partials/background-showcase/background-showcase.component';
import { BannerComponent } from './components/partials/banner/banner.component';
import { FeatureComponent } from './components/partials/feature/feature.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TheQuantumProComponent } from './components/the-quantum-pro/the-quantum-pro.component';
import { AnimateInViewportDirective } from './directives/animate/animate-in-viewport.directive';
import { GlobalErrorHandler } from './error-handler/global-error-handler';
import { HttpErrorInterceptor } from './error-handler/http-error.interceptor';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AsideOverviewComponent,
    FeatureComponent,
    FooterComponent,
    BannerComponent,
    TheQuantumProComponent,
    FaqComponent,
    AboutComponent,
    PricingComponent,
    PlaceOrderComponent,
    OrderConfirmedComponent,
    PrivacyPolicyComponent,
    GetHelpComponent,
    BackgroundShowcaseComponent,
    AnimateInViewportDirective,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    SharedModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
