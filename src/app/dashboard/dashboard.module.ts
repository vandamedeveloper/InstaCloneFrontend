import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { DashboardContainerRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { CreatePostComponent } from './components/modals/create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardContainerComponent,
    ProfileComponent,
    CreatePostComponent,
  ],
  imports: [CommonModule, DashboardContainerRoutingModule, ReactiveFormsModule],
})
export class DashboardModule {}
