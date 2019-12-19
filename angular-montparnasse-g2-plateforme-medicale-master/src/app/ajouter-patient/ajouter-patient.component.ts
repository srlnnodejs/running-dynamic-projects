import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-ajouter-patient',
  templateUrl: './ajouter-patient.component.html',
  styleUrls: ['./ajouter-patient.component.css']
})
export class AjouterPatientComponent {

  constructor(private serviceA: PatientService) { }


  patient = {
	  idPersonne: 0,
      nom: '',
      prenom: '',
      dateNaissance: null,
      telephone: '',
      email: '',
      idNationale: ''
  };


  addPatients() {
        this.serviceA.savePatients(this.patient)
        .subscribe(data => {
        this.patient.nom = '',
        this.patient.prenom = '',
        this.patient.dateNaissance = '',
        this.patient.telephone = '',
        this.patient.email = '',
        this.patient.idNationale = ''
        ; });
    }

}
