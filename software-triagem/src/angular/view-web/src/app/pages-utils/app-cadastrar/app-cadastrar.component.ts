import {Component, OnInit} from '@angular/core';
import { CadastrarService } from './service/cadastro.service';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';


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


  form!: FormGroup;


  onSubmit(formCadastro : NgForm) {
    console.log(formCadastro)
    if(formCadastro.valid){
      this.servico.save(formCadastro.value)
    }else {
      console.log("Não deu ")
    }

  }

  ngOnInit(): void {
    this.form = this.fb.group({
    })
  }



}
