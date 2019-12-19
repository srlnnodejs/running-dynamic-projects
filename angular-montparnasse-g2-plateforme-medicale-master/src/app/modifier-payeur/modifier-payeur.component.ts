import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PayeurService } from '../payeur.service';

@Component({
  selector: 'app-modifier-payeur',
  templateUrl: './modifier-payeur.component.html',
  styleUrls: ['./modifier-payeur.component.css']
})
export class ModifierPayeurComponent implements OnInit {

  constructor(private serviceA: PayeurService, private router: ActivatedRoute) { }

  payeur = {
      idPayeur: 0,
      nomPayeur: '',
      typePayeur: '',
      taux: 0
  };

  ngOnInit() {
      this.payeur.idPayeur =+ this.router.snapshot.params['idPa'];
      this.serviceA.getPayeur(this.payeur.idPayeur)
        .subscribe(data => {
            this.payeur.typePayeur = data['typePayeur'];
            this.payeur.taux = data['taux'];
            this.payeur.nomPayeur = data['nomPayeur'];
        });
  }

  modifierPayeurs() {
      this.serviceA.updatePayeur(this.payeur.idPayeur, this.payeur)
        .subscribe(data => {
        this.payeur.typePayeur = '',
        this.payeur.taux = 0,
        this.payeur.nomPayeur = ''; });
  }

}
