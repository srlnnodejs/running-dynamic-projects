import { Component, OnInit } from '@angular/core';
import { RemboursementService } from '../remboursement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lister-remboursement',
  templateUrl: './lister-remboursement.component.html',
  styleUrls: ['./lister-remboursement.component.css']
})
export class ListerRemboursementComponent implements OnInit {

   constructor(private serviceP: RemboursementService, private router: Router) { }

  pageRemboursements: any;

  remboursement: {
      idRemboursement: 0,
      payeur: '',
      facture: '',
      prix: 0.0,
  }

  payeur: {
      idPayeur: 0,
      nomPayeur: '',
      typePayeur: '',
  }

  facture: {
      idFacture: 0,
  }

  ngOnInit() {
      this.serviceP.getRemboursements()
        .subscribe(data => {this.pageRemboursements = data; },
                    err => {console.log(err); }
                    );
  }

}
