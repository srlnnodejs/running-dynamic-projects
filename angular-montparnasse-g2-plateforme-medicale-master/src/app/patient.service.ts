import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    constructor(private httpP: HttpClient) { }

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ CRUD Patient +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    getPatients() {
        return this.httpP.get('http://localhost:8080/patients');
    }

    savePatients(patient: any) {
        return this.httpP.post('http://localhost:8080/patients', patient);
    }

    deletePatient(idPatient: number) {
        return this.httpP.delete('http://localhost:8080/patients/' + idPatient);
    }

    updatePatient(idPatient: number, patient: any) {
        return this.httpP.put('http://localhost:8080/patients/' + idPatient, patient);
    }

    getPatient(idP: number) {
        return this.httpP.get('http://localhost:8080/patients/' + idP);
    }

    rattacherPatient(idPatient1: number, idPatient2: number, personne: any) {
        const param = idPatient1 + '/' + idPatient2;
        return this.httpP.put('http://localhost:8080/patientsP/' + param, personne);
    }
       synchPatientCompte(idPersonne: number, idCompte: number, compte: any) {
      const param = idPersonne + '/' + idCompte;
      return this.httpP.put('http://localhost:8080/comptesPers/' + param, compte);
  }
}
   