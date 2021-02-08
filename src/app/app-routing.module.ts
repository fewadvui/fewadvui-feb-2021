import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopypastaComponent } from './components/copypasta/copypasta.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { OrdersComponent } from './features/orders/orders.component';

const routes: Routes = [
  {
    path: 'onboarding',
    component: OnboardingComponent
  },
  {
    path: 'copypasta',
    component: CopypastaComponent
  },
  {
    path: 'orders',
    loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule)
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
