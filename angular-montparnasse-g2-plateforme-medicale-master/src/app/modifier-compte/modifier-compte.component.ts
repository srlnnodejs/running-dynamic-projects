import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-modifier-compte',
  templateUrl: './modifier-compte.component.html',
  styleUrls: ['./modifier-compte.component.css']
})
export class ModifierCompteComponent implements OnInit {

  constructor(private serviceA: CompteService, private router: ActivatedRoute) { }

  compte = {
      idCompte: 0,
      login: '',
      mdp: '',
      type: ''
  };

  ngOnInit() {
      this.compte.idCompte =+ this.router.snapshot.params['idC'];
      this.serviceA.getCompte(this.compte.idCompte)
        .subscribe(data => {
            this.compte.login = data['login'];
            this.compte.mdp = data['mdp'];
            this.compte.type = data['type'];
        });
  }

  modifierComptes() {
      this.serviceA.updateCompte(this.compte.idCompte, this.compte)
        .subscribe(data => {
        this.compte.login = '',
        this.compte.mdp = '',
        this.compte.type = ''; });
  }

}
