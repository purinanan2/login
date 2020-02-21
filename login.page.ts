import { Component} from '@angular/core';
import { FacebookLoginResponse } from '@ionic-native/facebook';
import { Facebook } from '@ionic-native/facebook/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  userData = null;
  
  
  constructor(/*private facebook: Facebook*/) { 

  }

/*
  loginWithFB() {
    this.facebook.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
    
    this.facebook.logEvent(this.facebook.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }
*/

}
