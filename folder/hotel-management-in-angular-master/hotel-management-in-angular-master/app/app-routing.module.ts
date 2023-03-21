import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = 
[
  { path: '',component: HomeComponent},
  { path: 'home',component: HomeComponent},
  { path: 'register',component: RegisterComponent},
  { path: 'profile',component: ProfileComponent},
  { path: 'update/:id',component: UpdateComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
