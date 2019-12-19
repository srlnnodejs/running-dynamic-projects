import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PraticienService {

  constructor(private httpP: HttpClient) { }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ CRUD Praticien +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  getPraticiens() {
      return this.httpP.get('http://localhost:8080/praticiens');
  }

  savePraticiens(praticien: any) {
      return this.httpP.post('http://localhost:8080/praticiens', praticien);
  }

  deletePraticien(idPraticien: number) {
      return this.httpP.delete('http://localhost:8080/praticiens/' + idPraticien);
  }

  updatePraticien(idPraticien: number, praticien: any) {
      return this.httpP.put('http://localhost:8080/praticiens/' + idPraticien, praticien);
  }

  getPraticien(idPraticien: number) {
       return this.httpP.get('http://localhost:8080/praticiens/' + idPraticien);
   }

  synchPrCompte(idPersonne: number, idCompte: number, compte: any) {
        const param = idPersonne + '/' + idCompte;
        return this.httpP.put('http://localhost:8080/comptePers/' + param, compte);
  }
}
