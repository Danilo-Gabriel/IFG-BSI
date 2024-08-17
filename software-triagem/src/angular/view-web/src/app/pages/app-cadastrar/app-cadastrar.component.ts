import {Component, OnInit} from '@angular/core';
import { CadastrarService } from './service/cadastro.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CadastroDTO} from "../../../model/cadastrar/cadastrar-dto";

@Component({
  selector: 'app-app-cadastrar',
  templateUrl: './app-cadastrar.component.html',
  styleUrls: ['./app-cadastrar.component.scss']
})

export class AppCadastrarComponent implements OnInit{


  constructor(
    private servico: CadastrarService,
    private fb: FormBuilder) {

  }

  /* VARIAVEIS DE AMBIENTE */
  form!: FormGroup;



  // fullName: ['', Validators.required],
  // phone: ['', Validators.required],
  // address: ['', Validators.required],
  // birthDate: ['', Validators.required],
  // email: ['', [Validators.required, Validators.email]],
  // password: ['', [Validators.required, Validators.minLength(8)]],
  // confirmPassword: ['', Validators.required]


  //METODO CHAMA O SERVIÇO SALVAR
  onSubmit() {

    this.servico.save(this.form.value);
  }

  ngOnInit(): void {
    this.form = this.fb.group({

    })
  }

}
