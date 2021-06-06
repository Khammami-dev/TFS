import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from "./Admin/home/home.component";



const routes: Routes = [
  { path: '',component:HeaderComponent},
  {path:'body',component:BodyComponent},
  {path:'admin',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
