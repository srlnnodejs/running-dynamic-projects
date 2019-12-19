import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lister-patient',
  templateUrl: './lister-patient.component.html',
  styleUrls: ['./lister-patient.component.css']
})
export class ListerPatientComponent implements OnInit {

  constructor(private serviceP: PatientService, private router: Router) { }

  pagePatients: any;

  personne = {
      idPersonne: 0
  }
  compte = {
      idCompte: 0
  }

  ngOnInit() {
      this.serviceP.getPatients()
        .subscribe(data => {this.pagePatients = data; },
                    err => {console.log(err); }
                    );
  }

  deletePatients(idPatient: number) {
     this.serviceP.deletePatient(idPatient)
     .subscribe(data => this.ngOnInit());
  }

  majPatients(idPatient: number) {
    this.router.navigate(['/modifierPatient', idPatient])
  }

  synchPatientCompte() {
        this.serviceP.synchPatientCompte(this.personne.idPersonne, this.compte.idCompte,  this.personne)
        .subscribe(data => {
        this.personne.idPersonne = 0,
        this.compte.idCompte = 0; });
    }

}
