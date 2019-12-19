import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RdvService {

    constructor(private httpP: HttpClient) { }

    getRdvs() {
        return this.httpP.get('http://localhost:8080/rdvs');
    }

    prendreRdvs(idPatient: number, idPraticien: number, rdv: any) {
        let param = idPatient + "/" + idPraticien;
        return this.httpP.put('http://localhost:8080/prendreRdv/' + param, rdv);
    }

    deleteRdv(idPatient: number, idPraticien: number/*, rdv: any*/) {
        let param = idPatient + "/" + idPraticien;
        return this.httpP.delete('http://localhost:8080/rdvs/' + param /*+ param, rdv*/);
    }

    getRdvDouble(idPatient: number, idPraticien: number) {
        let param = idPatient + "/" + idPraticien;
        return this.httpP.get('http://localhost:8080/rdvs/' + param);
    }
}
