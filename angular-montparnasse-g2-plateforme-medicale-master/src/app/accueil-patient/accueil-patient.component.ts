import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
    selector: 'app-accueil-patient',
    templateUrl: './accueil-patient.component.html',
    styleUrls: ['./accueil-patient.component.css']
})
export class AccueilPatientComponent implements OnInit {

    constructor(private serviceP: PatientService, private router: ActivatedRoute) { }

    patient = {
        idPersonne: 0,
        nom: '',
        prenom: '',
        dateNaissance: null,
        telephone: '',
        email: '',
        idNationale: ''
    };

    idPersonne: number;
    ngOnInit() {
        this.idPersonne = this.router.snapshot.params['idPersonne'];
        this.serviceP.getPatient(this.idPersonne).subscribe(
            data => {
                this.patient.nom = data['nom'];
                this.patient.prenom = data['prenom'];
                this.patient.dateNaissance = data['dateNaissance'];
                this.patient.telephone = data['telephone'];
                this.patient.email = data['email'];
                this.patient.idNationale = data['idNationale'];
            }
        )
    }


    espacePatient() {
        this.serviceP.getPatient(this.patient.idPersonne)
            .subscribe(data => {
                this.patient.idPersonne = data['idPersonne'];
                this.patient.nom = data['nom'];
                this.patient.prenom = data['prenom'];
                this.patient.dateNaissance = data['dateNaissance'];
                this.patient.telephone = data['telephone'];
                this.patient.email = data['email'];
                this.patient.idNationale = data['idNationale'];
            });

    }


}