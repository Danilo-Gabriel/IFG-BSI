import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {LocalStorageService} from "../../../shared/localStorage/localStorage";
import {AlterarSenhaService} from "./service/alterar-senha.service";
import {AppMessageService} from "../../../shared/message-service/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trocar-senha',
  templateUrl: './app-trocar-senha.component.html',
  styleUrls: ['./app-trocar-senha.component.scss']
})
export class AppTrocarSenhaComponent implements OnInit {

  form!: FormGroup;

private routeSub!: Subscription;
private idUsuario! : any;



  constructor(
    private storage : LocalStorageService,
    private service : AlterarSenhaService,
    private message : AppMessageService,
    private formBuilder : FormBuilder,
    private router : Router

){


    this.form = this.formBuilder.group({
      senhaAtual:['',Validators.required],
      novaSenha: ['', Validators.required],
      confirmarSenha:['', Validators.required]
    });




  }


  ngOnInit(): void {

    //  this.idUsuario = this.storage.returnLoginUser();

  }




  onSubmit(){


    if(this.form.valid){

      if(this.form.value.novaSenha === this.form.value.confirmarSenha){

        this.service.trocarSenha({
          //     id: this.idUsuario.id,
          senhaAtual: this.form.value.senhaAtual,
          novaSenha: this.form.value.novaSenha,
          confirmarSenha : this.form.value.confirmarSenha
        });

      }else{
        this.message.showError('As senha preenchidas não Coincidem')
      }

    }

    else{
      this.message.showError('Por favor, preencha todos os campos corretamente.');
    }

  }




  onCancel(){
    window.location.reload();
  }


}






