import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CadastroDTO} from "../../../../model/dto/cadastrar/cadastrar-dto";



@Injectable({
    providedIn: 'root'
})
export class CadastrarService {

    private apiUrl = 'http://localhost:8080/cadastrar'; // URL da API Quarkus

    constructor(private http: HttpClient) { }

    save(record : CadastroDTO){

    }
}
