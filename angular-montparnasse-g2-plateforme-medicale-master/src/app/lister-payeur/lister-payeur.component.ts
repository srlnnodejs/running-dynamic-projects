import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayeurService } from '../payeur.service';

@Component({
  selector: 'app-lister-payeur',
  templateUrl: './lister-payeur.component.html',
  styleUrls: ['./lister-payeur.component.css']
})
export class ListerPayeurComponent implements OnInit {

  constructor(private serviceP: PayeurService, private router: Router) { }

  pagePayeurs: any;

  payeur = {
      idPayeur: 0,
      nomPayeur : '',
      typePayeur: '',
      taux: 0.0
  }
  compte = {
      idCompte: 0
  }
  ngOnInit() {
      this.serviceP.getPayeurs()
        .subscribe(data => {this.pagePayeurs = data; },
                    err => {console.log(err); }
                    );
  }

  deletePayeurs(idPayeur: number) {
     this.serviceP.deletePayeur(idPayeur)
     .subscribe(data => this.ngOnInit());
  }

  majPayeurs(idPayeur: number) {
    this.router.navigate(['/modifierPayeur', idPayeur])
  }

  synchPayeurCompte() {
        this.serviceP.synchPayeurCompte(this.payeur.idPayeur, this.compte.idCompte,  this.payeur)
        .subscribe(data => {
        this.payeur.idPayeur = 0,
        this.compte.idCompte = 0; });
    }
}
