import {Component} from '@angular/core';

@Component({
  selector: 'app-config-token-page',
  templateUrl: './config-token-page.component.html',
  styleUrls: ['./config-token-page.component.scss']
})
export class ConfigTokenPageComponent {
  token: string = '';

  submitForm() {
    localStorage.setItem('access-token', this.token);
    //todo implementa el return
  }
}
