import { Component, OnInit } from '@angular/core';
import { PayeurService } from '../payeur.service';


@Component({
    selector: 'app-accueil-payeur',
    templateUrl: './accueil-payeur.component.html',
    styleUrls: ['./accueil-payeur.component.css']
})
export class AccueilPayeurComponent implements OnInit {

    constructor(private servicePayeur: PayeurService) { }

    payeur = {
        idPayeur: 0,
        nomPayeur: '',
        typePayeur: '',
        taux: 0.0,
    };

    ngOnInit() {
    }

    espacePayeur() {
        this.servicePayeur.getPayeur(this.payeur.idPayeur)
            .subscribe(data => {
                this.payeur.taux = data['taux'];
                this.payeur.typePayeur = data['typePayeur'];
                this.payeur.nomPayeur = data['nomPayeur'];

            });
    }

}
