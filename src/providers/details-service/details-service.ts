
import { Injectable } from '@angular/core';


@Injectable()
export class DetailsServiceProvider {


profiles=[];
details=[];
code=[];

  constructor() {
    
  this.profiles=[
    {firstname:'Senzi', lastname:'Zwane',age:'27' },
    {firstname:'Maria', lastname:'Aphane' ,age:'19'},
    {firstname:'Khensani', lastname:'Mathebula',age:'21' },
    {firstname:'Carol', lastname:'Xaba',age:'25' },
    {firstname:'Neo', lastname:'Sehlabane',age:'20' },
    ]
    console.log('Hello ServiceProvider Provider');
  }


  getprofiletribers(){
    return this.profiles
  }

  addDetails(index:number){
    this.details.push(this.profiles[index]);
    console.log(this.details)
}

getDetails(){
    return this.details;
}

getCode(){
    return this.code;
}    

}
