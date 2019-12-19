import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lister-comptes-dev',
  templateUrl: './lister-comptes-dev.component.html',
  styleUrls: ['./lister-comptes-dev.component.css']
})
export class ListerComptesDevComponent implements OnInit {
  pageComptes: any;
  constructor(private serviceP: CompteService, private router: Router) { }

  ngOnInit() {
      this.serviceP.getComptes()
        .subscribe(data => {this.pageComptes = data; },
                    err => {console.log(err); }
                    );
  }

  deleteComptes(idCompte: number) {
     this.serviceP.deleteCompte(idCompte)
     .subscribe(data => this.ngOnInit());
  }

  majComptes(idCompte: number) {
    this.router.navigate(['/modifierCompte', idCompte])
  }
}
