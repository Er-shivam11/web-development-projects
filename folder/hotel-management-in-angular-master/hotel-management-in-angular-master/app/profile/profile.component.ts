import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public collection:any;
  updateForm:any;

  constructor(private commonService:CommonService) { }

  ngOnInit(){
   

    this.commonService.getProfile().subscribe((result)=>{
      this.collection = result;
      console.log(this.collection)
    });
  }
}