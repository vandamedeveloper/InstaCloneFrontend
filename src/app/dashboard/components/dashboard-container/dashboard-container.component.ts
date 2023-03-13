import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from 'src/app/shared/models/UserProfile';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
})
export class DashboardContainerComponent implements OnInit {
  user: UserProfile;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this.user = this._route.snapshot.data['user'];
    console.log('user: ', this.user);
  }
}
