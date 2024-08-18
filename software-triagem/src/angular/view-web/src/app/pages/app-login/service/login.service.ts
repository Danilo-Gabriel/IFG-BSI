import { Injectable } from '@angular/core';
import {LoginDTO} from "../../../../model/dto/login/login-dto";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private http : HttpClient,
  )
  { }


  efetuarLogin(record : LoginDTO){
    debugger
    console.log(record);
    this.http.post<LoginDTO>(`http://localhost:8080/users`, record, {responseType: 'json'})
      .subscribe(
        (response) => {

          console.log(response)

        },
        (error) => {

          console.log(error)

        }
      );
  }

}
