import {Component, Inject} from '@angular/core';
import {AquariusAuthService} from "aquarius-auth";
import {Environment} from "aquarius-api";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(authService: AquariusAuthService, @Inject('env') private env: Environment ) {
    console.log('authService', authService.isConnected());
    console.log(env.apiUrl)
  }

}
