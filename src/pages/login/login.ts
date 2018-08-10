import { DetailsPage } from './../details/details';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { AlertController,ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  public details = [];

  LoginForm: FormGroup; 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder:FormBuilder,private alertCtrl: AlertController,public modalCtrl:
    ModalController) {

    this.LoginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, 
        Validators.pattern('[a-zA-Z]*'), 
      Validators.minLength(8), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, 
        Validators.minLength(8)])]

        
  });
  
  
  }
  
  createAccount(){


  let addModal = this.modalCtrl.create(RegisterPage);
 
  addModal.onDidDismiss((detail) => {

        if(detail){
          this.saveDetails(detail);
        }

  });

  addModal.present();


}
 
saveDetails(detail){
  this.details.push(detail);
}



viewDetail(detail){
  this.navCtrl.push(DetailsPage, {
    detail: detail
  });
}


 

  
}
