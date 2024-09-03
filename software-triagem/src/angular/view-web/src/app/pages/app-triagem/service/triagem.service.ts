import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { TriagemDTO } from "../../../../model/dto/triagem/triagem-dto";


@Injectable({
    providedIn: 'root'
})
export class TriagemService {
    constructor(private http: HttpClient) {}


    salvarTriagem(record: TriagemDTO) {
        this.http.post<any>(`http://localhost:8080/triagem`, record, {
            observe: 'response',
            responseType: 'text' as 'json'

        })

            .subscribe(
                (response: HttpResponse<any>) => {
                    console.log("Deu certo");
                },
                (error) => {
                    console.log("Deu ruim");
                });
    }
}
