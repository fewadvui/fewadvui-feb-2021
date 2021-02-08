import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopypastaComponent } from './components/copypasta/copypasta.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { PlatforminfoComponent } from './components/platforminfo/platforminfo.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { HttpClientModule } from "@angular/common/http";
import { UserManagerService } from './services/user-manager.service';
import { OrdersModule } from './features/orders/orders.module';
@NgModule({
  declarations: [
    AppComponent,
    CopypastaComponent,
    PlatforminfoComponent,
    OnboardingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
