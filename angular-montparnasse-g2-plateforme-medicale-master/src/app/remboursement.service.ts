import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemboursementService {

  constructor(private httpP: HttpClient) { }

  getRemboursements() {
      return this.httpP.get('http://localhost:8080/remboursements');
  }

  genererRemboursements(idPayeur: number, idFacture: number, remboursement: any) {
        const param = idPayeur + '/' + idFacture;
      return this.httpP.post('http://localhost:8080/remboursements/' + param, remboursement);
  }


//   updateRemboursement(idRemboursement: number, remboursement: any) {
//       return this.httpP.put('http://localhost:8080/remboursements/' + idRemboursement, remboursement);
//   }

  getRemboursement(idRemboursement: number) {
       return this.httpP.get('http://localhost:8080/remboursements/' + idRemboursement);
   }

  calculRemboursement(idRemboursement: number) {
       return this.httpP.get('http://localhost:8080/remboursementsCalcul/' + idRemboursement);
   }
}
