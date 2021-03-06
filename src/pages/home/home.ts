
import { UserProfilePage } from './../user-profile/user-profile';
import { LoginPage } from './../login/login';
import { RegisterPage } from './../register/register';
import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { AlertController,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
 
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
  

  onSubmit(value: any): void { 
    if(this.LoginForm.valid) {
     

    }
    this.navCtrl.push(UserProfilePage);


}


createAccount(){

  this.navCtrl.push(LoginPage);
}



}
