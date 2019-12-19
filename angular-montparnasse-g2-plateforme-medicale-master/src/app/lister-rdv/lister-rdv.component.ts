import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RdvService } from '../rdv.service';

@Component({
  selector: 'app-lister-rdv',
  templateUrl: './lister-rdv.component.html',
  styleUrls: ['./lister-rdv.component.css']
})
export class ListerRdvComponent implements OnInit {

	constructor(private serviceP: RdvService, private router: Router) { }
  pageRdvs: any;

  personne = {
      idPersonne: 0
  }
  rdv = {
      idRdv: 0
  }

  ngOnInit() {
      this.serviceP.getRdvs()
        .subscribe(data => {this.pageRdvs = data; },
                    err => {console.log(err); }
                    );
  }

//   deleteRdvs(idRdv: number) {
//      this.serviceP.deleteRdv(idRdv)
//      .subscribe(data => this.ngOnInit());
//   }

  majRdvs(idRdv: number) {
    this.router.navigate(['/modifierRdv', idRdv])
  }



}
