
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AppMessageService} from "../../../../shared/message-service/message.service";
import {AlterarSenhaUsuario} from "../../../../model/dto/utils/dados-alterar-senha.dto";



@Injectable({
  providedIn: 'root'
})
export class AlterarSenhaService {



  constructor(
    private http : HttpClient,
    private message : AppMessageService

  ) { }


  trocarSenha(record : AlterarSenhaUsuario) {


    this.http.put<AlterarSenhaUsuario>(`http://localhost:8080/trocar-senha`, record)
      .subscribe(
        (response => {
          this.message.showSuccess(`Usuário Atualizado`)
          window.location.reload();
        }),
        (error => {
          this.message.showError(`${error.error}`)
        })
      )

  }


}
