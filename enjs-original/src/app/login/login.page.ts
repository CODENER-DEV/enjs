import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
declare var axios: any;
import { config } from '../../settings/config';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showSpinner = false;
  email: string = '';
  password: string = '';

  constructor(
    private toastController: ToastController,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  /**
   * logIn communicates with API Movies - verify user if is valid or exist
   * @returns {Object} redirect to home if is valid user
   */
  logIn(){
    this.showSpinner = true;
    axios.post(config.hostname + ':' + config.PORT + config.routeUsers + '/login', {
        email: this.email,
        password: this.password
      },
      {
      headers: {
          'Content-Type': 'application/json'
      }
    }).then(async (res: any) => {
      console.log(res);
      if(res.status == 200){
        await this.storage.set('token', res.data.token);
        this.router.navigate(['/home'], {replaceUrl: true});
      }
    }).catch((error: any) => {
      console.log(error);
      this.showSpinner = false;
      this.toastController.create({
        message: error.response.data.error,
        position: 'bottom',
        duration: 4000,
        color: 'dark',
      }).then((toast) => {
        toast.present();
      });
    });
  }

}
