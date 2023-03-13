import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { DashboardContainerRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [DashboardContainerComponent, ProfileComponent],
  imports: [CommonModule, DashboardContainerRoutingModule],
})
export class DashboardModule {}
