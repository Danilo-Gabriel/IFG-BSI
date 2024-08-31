import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CadastroDTO} from "../../../../model/dto/cadastrar/cadastrar-dto";


@Injectable({
    providedIn: 'root'
})
export class CadastrarService {

    private apiUrl = 'http://localhost:8080/cadastrar'; // URL da API Quarkus

    constructor(private http: HttpClient) { }

    save(record : CadastroDTO) {
        this.http.post<any>(`http://localhost:8080/cadastrar`, record, {
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
