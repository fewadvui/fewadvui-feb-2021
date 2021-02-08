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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
