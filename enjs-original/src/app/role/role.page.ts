import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
declare var axios: any;
import { config } from '../../settings/config';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.page.html',
  styleUrls: ['./role.page.scss'],
})
export class RolePage implements OnInit {

  showSpinner = false;
  role: string = 'user';
  id: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) { }

  // get params user id
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(params['id']);
    });
  }

  /**
   * signUp communicates with API Movies - save and update user role
   * @returns {Object} redirect to login
   */
  signUp(){
    this.showSpinner = true;
    axios.put(config.hostname + ':' + config.PORT + config.routeRoles + '/role/' + this.id, {
        role: this.role
      },
      {
      headers: {
          'Content-Type': 'application/json'
      }
    }).then(async (res: any) => {
      console.log(res);
      if(res.status == 200){
        this.router.navigate(['/login'], {replaceUrl: true});
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
