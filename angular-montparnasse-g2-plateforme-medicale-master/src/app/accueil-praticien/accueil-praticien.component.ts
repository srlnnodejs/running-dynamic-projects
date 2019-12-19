import { Component, OnInit } from '@angular/core';
import { PraticienService } from '../praticien.service';

@Component({
    selector: 'app-accueil-praticien',
    templateUrl: './accueil-praticien.component.html',
    styleUrls: ['./accueil-praticien.component.css']
})
export class AccueilPraticienComponent implements OnInit {

    constructor(private servicePraticien: PraticienService) { }

    praticien = {
        idPersonne: 0,
        nom: '',
        prenom: '',
        dateNaissance: null,
        telephone: '',
        email: '',
        idNationale: '',
        liberal: '',
        metier: '',
        structure: '',
        affiliation: '',
    };

    ngOnInit() {
    }

    espacePraticien() {
        this.servicePraticien.getPraticien(this.praticien.idPersonne)
            .subscribe(data => {
                this.praticien.nom = data['nom'];
                this.praticien.prenom = data['prenom'];
                this.praticien.dateNaissance = data['dateNaissance'];
                this.praticien.telephone = data['telephone'];
                this.praticien.email = data['email'];
                this.praticien.idNationale = data['idNationale'];
                this.praticien.liberal = data['liberal'];
                this.praticien.metier = data['metier'];
                this.praticien.structure = data['structure'];
                this.praticien.affiliation = data['affiliation'];

            });


    }

}
