import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ActivatedRoute } from '@angular/router';

export interface Hobby {
  name: string;
}





@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  

  temp :boolean = false
  temp1:boolean= false
  private fileName:any;
  alert:boolean=false;
  checkData:boolean=false
  updateForm=new FormGroup({
    fname : new FormControl(''),
     lname : new FormControl(''),
     email : new FormControl(''),
     add1 : new FormControl(''),
     add2 : new FormControl(''),
     pno :new FormControl(''),
     age : new FormControl(''),
     state : new FormControl(''),
     country : new FormControl(''),
     tag : new FormControl(''),
     checkData: new FormControl(''),

  })

  


  
  constructor(private task:CommonService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.snapshot.params.id)
    this.task.getCurrentData(this.router.snapshot.params.id).subscribe((result:any)=>{
      console.log(result)
      this.updateForm=new FormGroup({
         fname :new FormControl('',[Validators.maxLength(20),Validators.pattern('[a-zA-Z]+$')]),
         lname : new FormControl('',[Validators.maxLength(20),Validators.pattern('[a-zA-Z]+$')]),
         email : new FormControl(result['email']),
         add1 : new FormControl('',[Validators.required]),
         add2 : new FormControl('',[Validators.required]),
         pno :new FormControl(result['pno']),
         age : new FormControl(result['age']),
         state : new FormControl(result['state']),
         country : new FormControl(result['country']),
         tag : new FormControl(result['tag']),
         checkData:new FormControl(result['checkData']),
    
    
      })
    
    })

    
  }

  //validators
get fname() {return this.updateForm.get('fname')}   
get lname() {return this.updateForm.get('lname')}
get add1() {return this.updateForm.get('add1')}
get add2() {return this.updateForm.get('add2')}

  updateUser(){
    // update from ngsubmit=updateuser from service
    this.task.updateUser(this.router.snapshot.params.id,this.updateForm.value).subscribe((result:any)=>{
     console.log("data updated successfully",result);
     //for alert
     this.alert=true;
    })
   }
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
  //for image
  file(event:any){
    const reader = new FileReader();
      this.fileName = event.target.files[0]
      let img = new Image();
      img.src=window.URL.createObjectURL(this.fileName);
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        
        const width = 59830;
        const height = 59830;
        if(width < 310 && height < 193){
          alert("Image should be 310 X 193 size")
        }
        else{
          alert("Image uploaded sucessfully!")
          this.updateForm.patchValue({
            file: reader.result
          })

        }
        ;
      };
  }
//for age
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}

