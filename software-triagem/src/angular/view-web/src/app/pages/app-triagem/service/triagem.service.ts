import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TriagemDTO } from '../../../../model/dto/triagem/triagem-dto';

@Injectable({
    providedIn: 'root'
})
export class TriagemService {

    private apiUrl = 'http://localhost:8080/triagem'; // URL da API

    constructor(private http: HttpClient) {}

    salvarTriagem(record: { diabetico: "sim" | "nao"; especialidade: string; peso: number; dor: "sim" | "nao"; mediaPonderada: number; hipertensao: "sim" | "nao"; febre: "sim" | "nao"; intensidade?: "fraca" | "media" | "intensa" }): Observable<TriagemDTO> {
        console.log(record);
        return this.http.post<TriagemDTO>(this.apiUrl, record, { responseType: 'json' });
    }
}
