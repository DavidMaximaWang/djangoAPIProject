import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AltertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  model: any = { user: {} };
  constructor(
    public authService: AuthService,
    private alertify: AltertifyService
  ) {}

  ngOnInit() {}
  login() {
    this.authService.login(this.model).subscribe({
      next: next => {
        this.alertify.success('Logged in succeffully');
      },
      error: error => {
        this.alertify.error(error);
      },
      complete: () => {
        console.log('logged');
      }
    });
    console.log(this.model);
  }
}
