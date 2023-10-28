import {Component, inject} from '@angular/core';
import {AuthService} from "@core/services/auth.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-config-token-page',
  templateUrl: './config-token-page.component.html',
  styleUrls: ['./config-token-page.component.scss']
})
export class ConfigTokenPageComponent {
  token: string = '';

  private _authSrv = inject(AuthService);
  private _location = inject(Location);

  submitForm() {
    this._authSrv.setToken(this.token);
    this._location.back();
  }
}
