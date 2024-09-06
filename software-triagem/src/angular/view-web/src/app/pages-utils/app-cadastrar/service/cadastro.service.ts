import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {CadastroDTO} from "../../../../model/dto/cadastrar/cadastrar-dto";
import {AppMessageService} from "../../../../shared/message-service/message.service";


@Injectable({
    providedIn: 'root'
})
export class CadastrarService {

    private apiUrl = 'http://localhost:8080/usuario'; // URL da API Quarkus

    constructor(
      private http: HttpClient,
      private messageService : AppMessageService) { }

    save(record : CadastroDTO) {
        this.http.post<any>(this.apiUrl, record, {
            observe: 'response',
            responseType: 'text' as 'json'
        })
            .subscribe(
                (response: HttpResponse<any>) => {

                  this.messageService.showSuccess("Usuário salvo com sucesso!")
                    console.log("Deu Certo");
                },
                (error) => {

                  this.messageService.showError("Erro, contate o administrador!")
                });
    }
}
