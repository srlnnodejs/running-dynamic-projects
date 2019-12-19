import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListerPatientComponent } from './lister-patient/lister-patient.component';
import { AjouterPatientComponent } from './ajouter-patient/ajouter-patient.component';
import { ModifierPatientComponent } from './modifier-patient/modifier-patient.component';
import { ListerPraticienComponent } from './lister-praticien/lister-praticien.component';
import { AjouterPraticienComponent } from './ajouter-praticien/ajouter-praticien.component';
import { ModifierPraticienComponent } from './modifier-praticien/modifier-praticien.component';
import { ListerFactureComponent } from './lister-facture/lister-facture.component';
import { AjouterFactureComponent } from './ajouter-facture/ajouter-facture.component';
import { ListerCompteComponent } from './lister-compte/lister-compte.component';
import { AjouterCompteComponent } from './ajouter-compte/ajouter-compte.component';
import { ModifierCompteComponent } from './modifier-compte/modifier-compte.component';
import { ListerPayeurComponent } from './lister-payeur/lister-payeur.component';
import { ModifierPayeurComponent } from './modifier-payeur/modifier-payeur.component';
import { AjouterPayeurComponent } from './ajouter-payeur/ajouter-payeur.component';
import { ListerRdvComponent } from './lister-rdv/lister-rdv.component';

import { ListerRemboursementComponent } from './lister-remboursement/lister-remboursement.component';
import { AjouterRemboursementComponent } from './ajouter-remboursement/ajouter-remboursement.component';
import { AccueilPatientComponent } from './accueil-patient/accueil-patient.component';
import { AccueilPraticienComponent } from './accueil-praticien/accueil-praticien.component';
import { AccueilPayeurComponent } from './accueil-payeur/accueil-payeur.component';
import { AccueilGeneralComponent } from './accueil-general/accueil-general.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { DevComponent } from './dev/dev.component';
import { RattacherPatientComponent } from './rattacher-patient/rattacher-patient.component';
import { PrendreRdvComponent } from './prendre-rdv/prendre-rdv.component';


const routes: Routes = [
    {path: 'listerPatient', component: ListerPatientComponent},
    {path: 'ajouterPatient', component: AjouterPatientComponent},
    {path: 'modifierPatient/:idP', component: ModifierPatientComponent},
    {path: 'rattacherPatient', component: RattacherPatientComponent},

    {path: 'listerPraticien', component: ListerPraticienComponent},
    {path: 'ajouterPraticien', component: AjouterPraticienComponent},
    {path: 'modifierPraticien/:idPr', component: ModifierPraticienComponent},

    {path: 'listerFacture', component: ListerFactureComponent},
    {path: 'ajouterFacture', component: AjouterFactureComponent},

    {path: 'listerCompte', component: ListerCompteComponent},
    {path: 'ajouterCompte', component: AjouterCompteComponent},
    {path: 'modifierCompte/:idC', component: ModifierCompteComponent},

    {path: 'listerPayeur', component: ListerPayeurComponent},
    {path: 'ajouterPayeur', component: AjouterPayeurComponent},
    {path: 'modifierPayeur/:idPa', component: ModifierPayeurComponent},

    {path: 'listerRdv', component: ListerRdvComponent},
    {path: 'prendreRdv', component: PrendreRdvComponent},


    {path: 'listerRemboursement', component: ListerRemboursementComponent},
    {path: 'ajouterRemboursement', component: AjouterRemboursementComponent},

    {path: 'accueilPatient', component: AccueilPatientComponent},
    {path: 'accueilPraticien', component: AccueilPraticienComponent},
    {path: 'accueilPayeur', component: AccueilPayeurComponent},
    {path: 'accueilGeneral', component: AccueilGeneralComponent},

    {path: 'pageAccueil', component: PageAccueilComponent},
    {path: 'dev', component: DevComponent},




    {path: '', redirectTo: '/pageAccueil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
