import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

//pop export
export interface DialogData {
  register: string;
}




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  register: any;

  constructor(public dialog: MatDialog) {}
//pop up register
  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '600px',
      data: {register: this.register}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.register = result;
    });
  }

}
//pop register ends here 


  