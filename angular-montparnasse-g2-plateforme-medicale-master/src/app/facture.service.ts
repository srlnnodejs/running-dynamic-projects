import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FactureService {

    constructor(private httpP: HttpClient) { }

    getFactures() {
        return this.httpP.get('http://localhost:8080/factures');
    }

    genererFactures(idPayeur: number, tarif: number, facture: any) {
    const  param = idPayeur+ '/' +tarif;
    return this.httpP.post('http://localhost:8080/factures/' + param, facture);
    }

    getFacture(idFacture: number) {
        return this.httpP.get('http://localhost:8080/factures/' + idFacture);
    }
}
