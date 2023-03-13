import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { TokenGuard } from './auth/guards/token.guard';
import { UserResolver } from './shared/resolvers/user.resolver';
import { AuthGuard } from './auth/guards/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [TokenGuard, UserResolver, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
