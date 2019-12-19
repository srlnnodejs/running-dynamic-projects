import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListerPatientComponent } from './lister-patient/lister-patient.component';
import { AjouterPatientComponent } from './ajouter-patient/ajouter-patient.component';
import { ModifierPatientComponent } from './modifier-patient/modifier-patient.component';
import { ListerPraticienComponent } from './lister-praticien/lister-praticien.component';
import { AjouterPraticienComponent } from './ajouter-praticien/ajouter-praticien.component';
import { ModifierPraticienComponent } from './modifier-praticien/modifier-praticien.component';
import { ListerCompteComponent } from './lister-compte/lister-compte.component';
import { AjouterCompteComponent } from './ajouter-compte/ajouter-compte.component';
import { ModifierCompteComponent } from './modifier-compte/modifier-compte.component';
import { ListerRdvComponent } from './lister-rdv/lister-rdv.component';

import { ListerFactureComponent } from './lister-facture/lister-facture.component';
import { AjouterFactureComponent } from './ajouter-facture/ajouter-facture.component';
import { ListerRemboursementComponent } from './lister-remboursement/lister-remboursement.component';
import { AjouterRemboursementComponent } from './ajouter-remboursement/ajouter-remboursement.component';
import { ListerPayeurComponent } from './lister-payeur/lister-payeur.component';
import { AjouterPayeurComponent } from './ajouter-payeur/ajouter-payeur.component';
import { ModifierPayeurComponent } from './modifier-payeur/modifier-payeur.component';
import { AccueilPatientComponent } from './accueil-patient/accueil-patient.component';
import { AccueilPraticienComponent } from './accueil-praticien/accueil-praticien.component';
import { AccueilPayeurComponent } from './accueil-payeur/accueil-payeur.component';
import { AccueilGeneralComponent } from './accueil-general/accueil-general.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PrendreRdvComponent } from './prendre-rdv/prendre-rdv.component';
import { RattacherPatientComponent } from './rattacher-patient/rattacher-patient.component';
import { DevComponent } from './dev/dev.component';

import { ListerComptesDevComponent } from './lister-comptes-dev/lister-comptes-dev.component';

const appRoutes: Routes = [
    { path: 'listerPatient', component: ListerPatientComponent },
    { path: 'ajouterPatient', component: AjouterPatientComponent },
    { path: 'modifierPatient/:idP', component: ModifierPatientComponent },

    { path: 'listerPraticien', component: ListerPraticienComponent },
    { path: 'ajouterPraticien', component: AjouterPraticienComponent },
    { path: 'modifierPraticien/:idPr', component: ModifierPraticienComponent },

    { path: 'listerFacture', component: ListerFactureComponent },
    { path: 'ajouterFacture', component: AjouterFactureComponent },

    { path: 'listerCompte', component: ListerCompteComponent },
    { path: 'ajouterCompte', component: AjouterCompteComponent },
    { path: 'modifierCompte/:idC', component: ModifierCompteComponent },

    { path: 'listerPayeur', component: ListerPayeurComponent },
    { path: 'ajouterPayeur', component: AjouterPayeurComponent },
    { path: 'modifierPayeur/:idPa', component: ModifierPayeurComponent },

    { path: 'listerRdv', component: ListerRdvComponent },


    { path: 'listerRemboursement', component: ListerRemboursementComponent },
    { path: 'ajouterRemboursement', component: AjouterRemboursementComponent },

    { path: 'accueilPatient', component: AccueilPatientComponent },
    { path: 'accueilPraticien', component: AccueilPraticienComponent },
    { path: 'accueilPayeur', component: AccueilPayeurComponent },
    { path: 'accueilGeneral', component: AccueilGeneralComponent },

    { path: 'pageAccueil', component: PageAccueilComponent },
    { path: 'dev', component: DevComponent },

    { path: '', redirectTo: '/pageAccueil', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        ListerPatientComponent,
        AjouterPatientComponent,
        ModifierPatientComponent,
        ListerPraticienComponent,
        AjouterPraticienComponent,
        ModifierPraticienComponent,
        ListerCompteComponent,
        AjouterCompteComponent,
        ModifierCompteComponent,
        ListerRdvComponent,
        ListerFactureComponent,
        AjouterFactureComponent,
        ListerRemboursementComponent,
        AjouterRemboursementComponent,
        ListerPayeurComponent,
        AjouterPayeurComponent,
        ModifierPayeurComponent,
        AccueilPatientComponent,
        AccueilPraticienComponent,
        AccueilPayeurComponent,
        AccueilGeneralComponent,
        PageAccueilComponent,
        PrendreRdvComponent,
        RattacherPatientComponent,
        DevComponent,
        ListerComptesDevComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }


