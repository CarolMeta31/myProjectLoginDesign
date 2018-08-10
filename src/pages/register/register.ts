import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,FormGroup,Validators,FormArray } from '@angular/forms';
import {ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  profileForm:FormGroup;
    Name:string;
    Surname:string;
    Age:number;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder:FormBuilder,public viewCtrl:ViewController) {
  
      this.profileForm= formBuilder.group({
        Name: ['', Validators.compose([Validators.required, 
          Validators.pattern('[a-zA-Z]*'), 
        Validators.minLength(2)])],
        Surname: ['', Validators.compose([Validators.required, 
          Validators.pattern('[a-zA-Z]*'), 
        Validators.minLength(2)])],
  
        Age: ['', Validators.compose([Validators.required,
        Validators.pattern('[0-9]*')])],
  
         });
  
    }

  onSubmit(value: any): void { 
    
    if(this.profileForm.valid) {
     
    let newProfile = {
      Name: this.Name,
      Surname: this.Surname,
      Age:this.Age
    };
 
    this.viewCtrl.dismiss(newProfile);
 

    }

    //this.navCtrl.push(DetailsPage);
   

}   

close(){
  this.viewCtrl.dismiss();
}


}
