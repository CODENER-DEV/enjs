import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
declare var axios: any;
import { config } from '../../settings/config';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showSpinner = false;
  movies: any = [];
  query: string = '';
  isModalOpen = false;
  title: string = '';
  description: string = '';
  producer: string = '';
  director: string = '';
  protagonists: string = '';
  isCreate: boolean = false;
  titleModal: string = '';
  titleButton: string = '';
  idMovie: any;
  token: string = '';

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit() {}

  /**
   * ionViewWillEnter (Lifecycle event) - verify Token saved in storage if is valid o already expired
   * @returns {Object} show movies if is valid token, else redirect to login if is invalid
   */
  async ionViewWillEnter(){
    this.token = await this.storage.get('token');
    console.log(this.token);
    if(!this.token){
      this.router.navigate(['/login'], {replaceUrl: true});
    }
    this.getMovies();
  }

  /**
   * getMovies communicates with API Movies - get all movies and verify Token with JWT if is valid o already expired
   * @returns {Object} movies
   */
  getMovies(){
    axios.get(config.hostname + ':' + config.PORT + config.routeMovies + '/all', {
      headers: {
          'Content-Type': 'application/json',
          'Auth-Token': this.token
      }
    }).then(async (res: any) => {
        console.log(res);
        if(res.status == 200){
          this.movies = [...res.data.movies];
        }
    }).catch(async (error: any) => {
      console.log(error);
      this.toastController.create({
        message: error.response.data.error,
        position: 'bottom',
        duration: 4000,
        color: 'dark',
      }).then((toast) => {
        toast.present();
      });
      if(error.response.data.type == 'tar' || error.response.data.type == 'adtiae'){
        await this.storage.remove('token');
        this.router.navigate(['/login'], {replaceUrl: true});
      }
    });
  }

  /**
   * getMoviesByTitle communicates with API Movies - get all movies with filter and verify Token with JWT if is valid o already expired
   * @returns {Object} movies
   */
  getMoviesByTitle(){
    if(this.query == ''){
      this.getMovies();
    }
    else{
      axios.get(config.hostname + ':' + config.PORT + config.routeMovies + '/search/' + this.query, {
        headers: {
            'Content-Type': 'application/json',
            'Auth-Token': this.token
        }
      }).then(async (res: any) => {
          console.log(res);
          if(res.status == 200){
            this.movies = [...res.data.movies];
          }
      }).catch(async (error: any) => {
        console.log(error);
        this.toastController.create({
          message: error.response.data.error,
          position: 'bottom',
          duration: 4000,
          color: 'dark',
        }).then((toast) => {
          toast.present();
        });
        if(error.response.data.type == 'tar' || error.response.data.type == 'adtiae'){
          await this.storage.remove('token');
          this.router.navigate(['/login'], {replaceUrl: true});
        }
      });
    }
  }

  /**
   * openCreateEditMovie - show modal for edit and create movie
   * @param {Object} from - type action
   * @param {Object} movie  - movie data to edit
   */
  openCreateEditMovie(from: string, movie: any){
    this.isModalOpen = true;
    if(from == 'edit'){
      this.isCreate = false;
      this.titleModal = 'Edit';
      this.titleButton = 'Update';
      this.title = movie.title;
      this.description = movie.description;
      this.producer = movie.producer;
      this.director = movie.director;
      this.protagonists = movie.protagonists;
      this.idMovie = movie._id;
    }
    else{
      this.isCreate = true;
      this.titleModal = 'Create';
      this.titleButton = this.titleModal;
      this.title = '';
      this.description = '';
      this.producer = '';
      this.director = '';
      this.protagonists = '';
      this.idMovie = '';
    }
  }

  /**
   * createEditMovie communicates with API Movies - create and edit movie and verify Token with JWT if is valid o already expired
   * @returns {Object} show movies
   */
  createEditMovie(){
    this.showSpinner = true;
    let request: any;
    if(this.isCreate){
      request = axios.post(config.hostname + ':' + config.PORT + config.routeMovies + '/create', {
          title: this.title,
          description: this.description,
          producer: this.producer,
          director: this.director,
          protagonists: this.protagonists
        },
        {
        headers: {
            'Content-Type': 'application/json',
            'Auth-Token': this.token
        }
      });
    }
    else{
      request = axios.put(config.hostname + ':' + config.PORT + config.routeMovies + '/update/' + this.idMovie, {
          title: this.title,
          description: this.description,
          producer: this.producer,
          director: this.director,
          protagonists: this.protagonists
        },
        {
        headers: {
            'Content-Type': 'application/json',
            'Auth-Token': this.token
        }
      });
    }
    request.then(async (res: any) => {
        console.log(res);
        if(res.status == 200){
          this.isModalOpen = false;
          this.title = '';
          this.description = '';
          this.producer = '';
          this.director = '';
          this.protagonists = '';
          this.idMovie = '';
          this.showSpinner = false;
          if(this.query == ''){
            this.getMovies();
          }
          else{
            this.getMoviesByTitle();
          }
        }
    }).catch(async (error: any) => {
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
      if(error.response.data.type == 'tar' || error.response.data.type == 'adtiae'){
        await this.storage.remove('token');
        this.router.navigate(['/login'], {replaceUrl: true});
      }
    });
  }

  /**
   * deleteMovie communicates with API Movies - delete movie and verify Token with JWT if is valid o already expired
   * @param {Object} id - id movie to delete
   * @returns {Object} show movies
   */
  async deleteMovie(id: string){
    const alert = await this.alertController.create({
      header: 'Delete movie',
      message: 'Are you sure to delete the movie?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
            axios.delete(config.hostname + ':' + config.PORT + config.routeMovies + '/delete/' + id, {
              headers: {
                  'Content-Type': 'application/json',
                  'Auth-Token': this.token
              }
            }).then(async (res: any) => {
                console.log(res);
                if(res.status == 200){
                  if(this.query == ''){
                    this.getMovies();
                  }
                  else{
                    this.getMoviesByTitle();
                  }
                }
            }).catch(async (error: any) => {
              console.log(error);
              this.toastController.create({
                message: error.response.data.error,
                position: 'bottom',
                duration: 4000,
                color: 'dark',
              }).then((toast) => {
                toast.present();
              });
              if(error.response.data.type == 'tar' || error.response.data.type == 'adtiae'){
                await this.storage.remove('token');
                this.router.navigate(['/login'], {replaceUrl: true});
              }
            });
          },
        },
      ],
    });

    await alert.present();
  }

  /**
   * logOut - log out session user
   * @returns {Object} redirect to login
   */
  async logOut(){
    const alert = await this.alertController.create({
      header: 'Log Out',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: async () => {
            console.log('Alert confirmed');
            await this.storage.remove('token');
            this.router.navigate(['/login'], {replaceUrl: true});
          },
        },
      ],
    });

    await alert.present();
  }

}
