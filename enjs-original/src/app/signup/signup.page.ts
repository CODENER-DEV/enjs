import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
declare var axios: any;
import { config } from '../../settings/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  showSpinner = false;
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private toastController: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  /**
   * nextRole communicates with API Movies - save user
   * @returns {Object} redirect to select role
   */
  nextRole(){
    this.showSpinner = true;
    axios.post(config.hostname + ':' + config.PORT + config.routeUsers + '/register', {
        name: this.name,
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
        this.router.navigate(['/role', {id: res.data.user._id}], {replaceUrl: true});
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
