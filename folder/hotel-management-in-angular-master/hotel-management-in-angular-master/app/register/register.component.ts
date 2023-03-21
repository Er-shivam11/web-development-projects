import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, E, ENTER} from '@angular/cdk/keycodes';
import { CommonService } from '../common.service';
import { Observable, Subscriber } from 'rxjs';

export interface Hobby {
  name: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert :boolean=false
  temp :boolean = false
  temp1:boolean= false
  imageUpload: any;
  //image preview
  //end image here
  registerForm = new FormGroup({
     fname :new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
     lname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
     email : new FormControl(''),
     add1 : new FormControl('',[Validators.required]),
     add2 : new FormControl('',[Validators.required]),
     pno :new FormControl(''),
     age : new FormControl(''),
     state : new FormControl(''),
     country : new FormControl(''),
     tag : new FormControl(''),
     imageUpload:new FormControl(''),
     checkData:new FormControl(''),
    


  })
  
  
constructor(private task:CommonService){}
ngOnInit() {}




//service+ngsubmit=regUser html file
regUser(){
 // console.log(this.registerForm.value);
 this.task.regUser(this.registerForm.value).subscribe((result)=>{
  this.alert=true;
  this.registerForm.reset({});
  console.log("get data from Service",result);
 })
}
//validators
get fname() {return this.registerForm.get('fname')}   
get lname() {return this.registerForm.get('lname')}
get add1() {return this.registerForm.get('add1')}
get add2() {return this.registerForm.get('add2')}

closeAlert(){
  this.alert=false;
}

  //address dropdown
hidden(event : any){
  if (event.target.value == "1") {
    this.temp = true;
    this.temp1 = false;
  }
  else {
    this.temp = false;
    this.temp1 = true;
  }

}
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  hobbies: Hobby[] = [
  
  ];



  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our hobbies
    if (value) {
      this.hobbies.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Hobby): void {
    const index = this.hobbies.indexOf(fruit);

    if (index >= 0) {
      this.hobbies.splice(index, 1);
    }
  }

  


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
  


