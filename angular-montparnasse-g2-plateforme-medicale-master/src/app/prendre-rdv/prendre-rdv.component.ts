import { Component, OnInit } from '@angular/core';
import { RdvService } from '../rdv.service';
import { PraticienService } from '../praticien.service';
import { PatientService } from '../patient.service';

@Component({
    selector: 'app-prendre-rdv',
    templateUrl: './prendre-rdv.component.html',
    styleUrls: ['./prendre-rdv.component.css']
})
export class PrendreRdvComponent implements OnInit {

    constructor(private serviceR: RdvService, private serviceP: PraticienService, private servicePa: PatientService) { }
    choix: 0;
    pagePraticiens: any;
    pagePatients: any;

    patient = {
        idPatient: 0
    }

    praticien = {
        idPraticien: 0
    }

    rdv = {
        dateRdv: new Date(),
        patient: 0,
        praticien: 0
    }

    ngOnInit() {
        this.serviceP.getPraticiens()
            .subscribe(data => { this.pagePraticiens = data; },
                err => { console.log(err); }
            );
        this.servicePa.getPatients()
            .subscribe(data => { this.pagePatients = data; },
                err => { console.log(err); }
            );
    }

    verifierRdvs() {
        this.serviceR.getRdvDouble(this.patient.idPatient, this.praticien.idPraticien)
            .subscribe(data => {
                this.patient.idPatient = data['patient.idPatient'];
                this.praticien.idPraticien = data['patient.idPraticien'];
            });
    }

    deleteRdvs(idPatient: number, idPraticien: number) {
        this.serviceR.deleteRdv(this.patient.idPatient, this.praticien.idPraticien)
            .subscribe(data => {
                this.patient.idPatient = 0,
                this.praticien.idPraticien = 0;
            });
    }

    addRdvs() {
        this.serviceR.prendreRdvs(this.patient.idPatient, this.praticien.idPraticien, this.rdv.dateRdv)
            .subscribe(data => {
                this.patient.idPatient = 0,
                this.praticien.idPraticien = 0
            });
    }

}
