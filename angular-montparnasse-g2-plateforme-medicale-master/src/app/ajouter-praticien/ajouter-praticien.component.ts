import { Component, OnInit } from '@angular/core';
import { PraticienService } from '../praticien.service';

@Component({
  selector: 'app-ajouter-praticien',
  templateUrl: './ajouter-praticien.component.html',
  styleUrls: ['./ajouter-praticien.component.css']
})
export class AjouterPraticienComponent /*implements OnInit*/ {

  constructor(private serviceA: PraticienService) { }

  praticien = {
      nom: '',
      prenom: '',
      dateNaissance: null,
      telephone: '',
      email: '',
      idNationale: '',
      liberal: '',
      metier: '',
      structure: '',
      affiliation: ''
  };
//   ngOnInit() {
//   }

  addPraticiens() {
        this.serviceA.savePraticiens(this.praticien)
        .subscribe(data => {
        this.praticien.nom = '',
        this.praticien.prenom = '',
        this.praticien.dateNaissance = null,
        this.praticien.telephone = '',
        this.praticien.email = '',
        this.praticien.idNationale = ''
        this.praticien.liberal = ''
        this.praticien.metier = ''
        this.praticien.structure = ''
        this.praticien.affiliation = ''
        ; });
    }

}
