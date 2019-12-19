import { Component, OnInit } from '@angular/core';
import { PayeurService } from '../payeur.service';

@Component({
  selector: 'app-ajouter-payeur',
  templateUrl: './ajouter-payeur.component.html',
  styleUrls: ['./ajouter-payeur.component.css']
})
export class AjouterPayeurComponent /*implements OnInit*/ {

  constructor(private serviceA: PayeurService) { }

  payeur = {
      nomPayeur: '',
      typePayeur: '',
      taux: 0
  };
//   ngOnInit() {
//   }

  addPayeurs() {
        this.serviceA.savePayeurs(this.payeur)
        .subscribe(data => {
        this.payeur.typePayeur = '',
        this.payeur.nomPayeur = '',
        this.payeur.taux = 0
        ; });
    }

}
