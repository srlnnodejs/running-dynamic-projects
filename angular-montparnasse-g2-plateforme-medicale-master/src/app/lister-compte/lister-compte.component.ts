import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteService } from '../compte.service';

@Component({
    selector: 'app-lister-compte',
    templateUrl: './lister-compte.component.html',
    styleUrls: ['./lister-compte.component.css']
})
export class ListerCompteComponent implements OnInit {

    pageComptes: any;
    constructor(private serviceP: CompteService, private router: Router) { }

    ngOnInit() {
        this.serviceP.getComptes()
            .subscribe(data => { this.pageComptes = data; },
                err => { console.log(err); }
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
