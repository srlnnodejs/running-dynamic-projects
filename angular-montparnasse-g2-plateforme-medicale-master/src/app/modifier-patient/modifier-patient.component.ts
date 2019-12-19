import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-modifier-patient',
  templateUrl: './modifier-patient.component.html',
  styleUrls: ['./modifier-patient.component.css']
})
export class ModifierPatientComponent implements OnInit {

  constructor(private serviceA: PatientService, private router: ActivatedRoute) { }

  patient = {
      idPersonne: 0,
      nom: '',
      prenom: '',
      dateNaissance: '',
      telephone: '',
      email: '',
      idNationale: ''
  };

  ngOnInit() {
      this.patient.idPersonne =+ this.router.snapshot.params['idP'];
      this.serviceA.getPatient(this.patient.idPersonne)
        .subscribe(data => {
            this.patient.nom = data['nom'];
            this.patient.prenom = data['prenom'];
            this.patient.dateNaissance = data['dateNaissance'];
            this.patient.telephone = data['telephone'];
            this.patient.email = data['email'];
            this.patient.idNationale = data['idNationale'];
        });
  }

  modifierPatients() {
      this.serviceA.updatePatient(this.patient.idPersonne, this.patient)
        .subscribe(data => {
        this.patient.nom = '',
        this.patient.prenom = '',
        this.patient.dateNaissance = '',
        this.patient.telephone = '',
        this.patient.email = '',
        this.patient.idNationale = ''; });
  }

}
