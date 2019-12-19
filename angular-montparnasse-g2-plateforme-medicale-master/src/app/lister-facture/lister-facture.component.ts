import { Component, OnInit } from '@angular/core';
import { FactureService } from '../facture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lister-facture',
  templateUrl: './lister-facture.component.html',
  styleUrls: ['./lister-facture.component.css']
})
export class ListerFactureComponent implements OnInit {

    constructor(private serviceP: FactureService, private router: Router) { }

  pageFactures: any;

  payeur: {
      idPayeur: 0,
      nomPayeur: '',
      typePayeur: '',
  }

  facture: {
      idFacture: 0,
      payeur: '',
      tarif: 0.0,
  }

  ngOnInit() {
      this.serviceP.getFactures()
        .subscribe(data => {this.pageFactures = data; },
                    err => {console.log(err); }
                    );
  }

}
