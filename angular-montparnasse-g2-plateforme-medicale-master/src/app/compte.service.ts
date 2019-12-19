import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private httpP: HttpClient) { }

  getComptes() {
      return this.httpP.get('http://localhost:8080/comptes');
  }

  saveComptes(compte: any) {
      return this.httpP.post('http://localhost:8080/comptes', compte);
  }

  deleteCompte(idCompte: number) {
      return this.httpP.delete('http://localhost:8080/comptes/' + idCompte);
  }

  updateCompte(idCompte: number, compte: any) {
      return this.httpP.put('http://localhost:8080/comptes/' + idCompte, compte);
  }

  getCompte(idCompte: number) {
       return this.httpP.get('http://localhost:8080/comptes/' + idCompte);
   }
}
