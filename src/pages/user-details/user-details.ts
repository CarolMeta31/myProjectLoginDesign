import { UserProfilePage } from './../user-profile/user-profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsServiceProvider } from './../../providers/details-service/details-service';

@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  details=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private profileService:DetailsServiceProvider) {
  
    this.details=this.profileService.getDetails();
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad UserDetailsPage');
  }
  ok(){
    this.profileService.details=[];
    this.navCtrl.push(UserProfilePage)
  }
}
