import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
    selector: 'app-rattacher-patient',
    templateUrl: './rattacher-patient.component.html',
    styleUrls: ['./rattacher-patient.component.css']
})
export class RattacherPatientComponent implements OnInit {

    pagePatients: any;

    constructor(private servicePa: PatientService) { }

    personne = {
        idPersonne: 0
    }
    patient1 = {
        idPatient1: 0
    };

    patient2 = {
        idPatient2: 0
    };

    rattacherPatients() {
        this.servicePa.rattacherPatient(this.patient1.idPatient1, this.patient2.idPatient2, this.personne)
            .subscribe(data => {
                this.patient1.idPatient1 = 0,
                    this.patient2.idPatient2 = 0;
            });
    }
    ngOnInit() {
        this.servicePa.getPatients()
            .subscribe(data => { this.pagePatients = data; },
                err => { console.log(err); }
            );
    }

}
