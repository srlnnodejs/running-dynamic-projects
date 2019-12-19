import { Component, OnInit } from '@angular/core';
import { FactureService } from '../facture.service';

@Component({
    selector: 'app-ajouter-facture',
    templateUrl: './ajouter-facture.component.html',
    styleUrls: ['./ajouter-facture.component.css']
})
export class AjouterFactureComponent implements OnInit {

    constructor(private serviceFa: FactureService) { }

    payeur = {
        idPayeur: 0
    };

    facture = {
        tarif: 0
    };

    ngOnInit() {
    }

    addFactures() {
        this.serviceFa.genererFactures(this.payeur.idPayeur, this.facture.tarif, this.facture)
            .subscribe(data => {
                this.payeur.idPayeur = 0,
                    this.facture.tarif = 0;
            });
    }
}
