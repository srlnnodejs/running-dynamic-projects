import { Component, OnInit } from '@angular/core';
import { RemboursementService } from '../remboursement.service';

@Component({
	selector: 'app-ajouter-remboursement',
	templateUrl: './ajouter-remboursement.component.html',
	styleUrls: ['./ajouter-remboursement.component.css']
})
export class AjouterRemboursementComponent implements OnInit {

	constructor(private serviceRe: RemboursementService) { }

	payeur = {
		idPayeur: 0
	}

	facture = {
		idFacture: 0
	}

	remboursement = {
		prix: 0
	}

	ngOnInit() {
	}

	addRemboursements() {
		this.serviceRe.genererRemboursements(this.payeur.idPayeur, this.facture.idFacture, this.remboursement)
			.subscribe(data => {
				this.payeur.idPayeur = 0,
					this.facture.idFacture = 0
			});
	}
}
