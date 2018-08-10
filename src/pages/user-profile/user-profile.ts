import { UserDetailsPage } from './../user-details/user-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsServiceProvider } from './../../providers/details-service/details-service';


@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  profiles=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private profileService:DetailsServiceProvider) {
  
    this.profiles=this. profileService.getprofiletribers();
  
  }

  detailsPeople(index:number){
     this.profileService.addDetails(index);
     this.navCtrl.push(UserDetailsPage);

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

}
