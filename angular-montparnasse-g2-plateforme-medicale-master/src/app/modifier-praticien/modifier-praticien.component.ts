import { Component, OnInit } from '@angular/core';
import { PraticienService } from '../praticien.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-praticien',
  templateUrl: './modifier-praticien.component.html',
  styleUrls: ['./modifier-praticien.component.css']
})
export class ModifierPraticienComponent implements OnInit {

  constructor(private serviceA: PraticienService, private router: ActivatedRoute) { }

  praticien = {
      idPersonne: 0,
      nom: '',
      prenom: '',
      dateDeNaissance: null,
      telephone: '',
      email: '',
      idNationale: '',
      liberal: '',
      metier: '',
      structure: '',
      affiliation: ''
  };

  ngOnInit() {
      this.praticien.idPersonne =+ this.router.snapshot.params['idPr'];
      this.serviceA.getPraticien(this.praticien.idPersonne)
        .subscribe(data => {
            this.praticien.nom = data['nom'];
            this.praticien.prenom = data['prenom'];
            this.praticien.dateDeNaissance = data['dateDeNaissance'];
            this.praticien.telephone = data['telephone'];
            this.praticien.email = data['email'];
            this.praticien.idNationale = data['idNationale'];
            this.praticien.liberal = data['liberal'];
            this.praticien.metier = data['metier'];
            this.praticien.structure = data['structure'];
            this.praticien.affiliation = data['affiliation'];
        });
  }

  modifierPraticiens() {
      this.serviceA.updatePraticien(this.praticien.idPersonne, this.praticien)
        .subscribe(data => {
        this.praticien.nom = '',
        this.praticien.prenom = '',
        this.praticien.dateDeNaissance = null,
        this.praticien.telephone = '',
        this.praticien.email = '',
        this.praticien.idNationale = '',
        this.praticien.liberal = '',
        this.praticien.metier = '',
        this.praticien.structure = '',
        this.praticien.affiliation = ''; });
  }

}
