import { Component, OnInit } from '@angular/core';
import { AccueilPatientComponent } from '../accueil-patient/accueil-patient.component';
import { AccueilPraticienComponent } from '../accueil-praticien/accueil-praticien.component';
import {Routes, RouterModule} from '@angular/router';
import { AccueilPayeurComponent } from '../accueil-payeur/accueil-payeur.component';
import { NgModule } from '@angular/core'; 

// @NgModule ({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule],
//     providers: []
// })
//   const routes: Routes = [
//     {path: 'accueilPatientComponent', component: AccueilPatientComponent},
//     {path: 'accueilPayeurComponent', component: AccueilPayeurComponent},
//     {path: 'accueilPraticien', component: AccueilPraticienComponent},
// ];

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
