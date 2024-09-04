import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {CadastroDTO} from "../../../../model/dto/cadastrar/cadastrar-dto";


@Injectable({
    providedIn: 'root'
})
export class CadastrarService {

    private apiUrl = 'http://localhost:8080/usuario'; // URL da API Quarkus

    constructor(private http: HttpClient) { }

    save(record : CadastroDTO) {
        this.http.post<any>(this.apiUrl, record, {
            observe: 'response',
            responseType: 'text' as 'json'
        })
            .subscribe(
                (response: HttpResponse<any>) => {
                    console.log("Deu Certo");
                },
                (error) => {
                    console.log("Deu Certo");
                });
    }
}
