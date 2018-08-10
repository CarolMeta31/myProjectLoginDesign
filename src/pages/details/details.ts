
import { LoginPage } from './../login/login';
import { RegisterPage } from './../register/register';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {




  Name:string;
  Surname:string;
  Age:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   ) {
 
    
 
 
  }

  ionViewDidLoad() {

    this.Name = this.navParams.get('detail').Name;
    this.Surname = this.navParams.get('detail').Surname;
    this.Age =this.navParams.get('detail').Age;
    
    console.log('ionViewDidLoad DetailsPage');
  }
  goBack(){
    this.navCtrl.pop();
} 


}
