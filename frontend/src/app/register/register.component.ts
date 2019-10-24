import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AltertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = { user: {} };
  @Output() setRegisterMode = new EventEmitter();

  constructor(
    private authService: AuthService,
    private alertify: AltertifyService
  ) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        this.alertify.success('registered ');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
  cancel() {
    this.setRegisterMode.emit(false);
  }
}
