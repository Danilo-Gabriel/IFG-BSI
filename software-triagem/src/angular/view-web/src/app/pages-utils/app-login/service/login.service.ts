import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginDTO} from "../../../../model/dto/login/login-dto";
import {AppMessageService} from "../../../../shared/message-service/message.service";
import {LocalStorageService} from "../../../../shared/localStorage/localStorage";



@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private http: HttpClient,
    private router: Router,
    private storage : LocalStorageService,
    private messagemService :AppMessageService
  ) {
  }

  efetuarLogin(record: LoginDTO) {
    this.http.post<any>(`http://localhost:8080/login`, record, {
      observe: 'response',
      responseType: 'text' as 'json'
    })
      .subscribe(
        (response: HttpResponse<any>) => {
          if (response.status === 200) {

            console.log('Response Body:', response.body);
            console.log(response)
            this.storage.armazenarLoginUser(response.body)
            this.messagemService.showSuccess("Sucesso!")
            this.router.navigate(['/admin']);

          }
        },
        (error) => {
          console.log('Error Status:', error.status);
          console.log('Error Body:', error.error);
          this.messagemService.showError(error.error)
        }
      );
  }

  logout(){
    this.router.navigate([ '/login']);
    this.storage.removerLoginUser();

    // this.http.head(`http://localhost:8080/login`, {
    //   observe: 'response',
    //   responseType: 'text' as 'json'
    // })
    //   .subscribe(
    //     (response: HttpResponse<any>) => {
    //       if (response.status === 200) {
    //         console.log('Response Body:', response.body);
    //
    //         this.messagemService.showSuccess("sucesso!")
    //
    //         // this.storage.removerLoginUser();
    //
    //         this.router.navigate([ '/login']);
    //       }
    //     },
    //     (error) => {
    //       console.log('Error Status:', error.status);
    //       console.log('Error Body:', error.error);
    //     }
    //   );

  }


  isAutenticado(){

    return this.storage.validarLoginUser("usuario-logado");

  }



}

