import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayeurService {

  constructor(private httpP: HttpClient) { }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ CRUD Payeur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  getPayeurs() {
      return this.httpP.get('http://localhost:8080/payeurs');
  }

  savePayeurs(payeur: any) {
      return this.httpP.post('http://localhost:8080/payeurs/', payeur);
  }

  deletePayeur(idPayeur: number) {
      return this.httpP.delete('http://localhost:8080/payeurs/' + idPayeur);
  }

  updatePayeur(idPayeur: number, payeur: any) {
      return this.httpP.put('http://localhost:8080/payeurs/' + idPayeur, payeur);
  }

  getPayeur(idPayeur: number) {
       return this.httpP.get('http://localhost:8080/payeurs/' + idPayeur);
   }

   // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Autres Methodes Payeur ++++++++++++++++++++++++++++++++++++++++++++++++++

   synchPayeurCompte(idPayeur: number, idCompte: number, compte: any) {
       const param = idPayeur + '/' + idCompte;
       return this.httpP.put('http://localhost:8080/comptesPay/' + param, compte);
  }
}
