import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {RegisterComponent } from './register/register.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    UpdateComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,MatIconModule,MatCheckboxModule,
    MatSelectModule,MatDialogModule,MatFormFieldModule,ReactiveFormsModule,MatSliderModule,MatChipsModule,MatInputModule
  ],

  exports:[
    MatIconModule,MatCardModule,MatButtonModule,MatMenuModule,MatToolbarModule,
    MatCheckboxModule,MatSelectModule,MatDialogModule,MatFormFieldModule,MatSliderModule,MatChipsModule,MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
