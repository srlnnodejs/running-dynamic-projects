import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-compte',
  templateUrl: './ajouter-compte.component.html',
  styleUrls: ['./ajouter-compte.component.css']
})
export class AjouterCompteComponent /*implements OnInit*/ {

  constructor(private serviceA: CompteService, private router: Router) { }

  compte = {
      login: '',
      mdp: '',
      type: ''
  };

  addComptes() {
        this.serviceA.saveComptes(this.compte)
        .subscribe(data => {
        this.compte.login = '',
        this.compte.mdp = '',
        this.compte.type = ''
        ; });
    }

}
