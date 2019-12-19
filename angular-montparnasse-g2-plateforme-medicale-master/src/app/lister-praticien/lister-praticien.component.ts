import { Component, OnInit } from '@angular/core';
import { PraticienService } from '../praticien.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lister-praticien',
  templateUrl: './lister-praticien.component.html',
  styleUrls: ['./lister-praticien.component.css']
})
export class ListerPraticienComponent implements OnInit {

  pagePraticiens: any;
  constructor(private serviceP: PraticienService, private router: Router) { }

  personne = {
      idPersonne: 0
  }
  compte = {
      idCompte: 0
  }

  ngOnInit() {
      this.serviceP.getPraticiens()
        .subscribe(data => {this.pagePraticiens = data; },
                    err => {console.log(err); }
                    );
  }

  deletePraticiens(idPraticien: number) {
     this.serviceP.deletePraticien(idPraticien)
     .subscribe(data => this.ngOnInit());
  }

  majPraticiens(idPraticien: number) {
    this.router.navigate(['/modifierPraticien', idPraticien])
  }

  synchPraticienCompte() {
        this.serviceP.synchPrCompte(this.personne.idPersonne, this.compte.idCompte,  this.personne)
        .subscribe(data => {
        this.personne.idPersonne = 0,
        this.compte.idCompte = 0; });
    }

}
