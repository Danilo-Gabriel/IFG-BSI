import { Component } from '@angular/core';
import { CadastrarService } from './service/cadastro.service';
import { CadastroDto } from '../../../model/cadastrar/cadastrar-dto';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-app-cadastrar',
    templateUrl: './app-cadastrar.component.html',
    styleUrls: ['./app-cadastrar.component.scss']
})

export class AppCadastrarComponent {


    formCadastro: FormGroup;

    constructor(private cadastrarService: CadastrarService, private fb: FormBuilder) {
        this.formCadastro = this.fb.group({
            fullName: ['', Validators.required],
            phone: ['', Validators.required],
            address: ['', Validators.required],
            birthDate: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]], // Adicione validação de email
            password: ['', [Validators.required, Validators.minLength(8)]], // Adicione validação de senha
            confirmPassword: ['', Validators.required]
        });
    }

    onSubmit() {
        // Validar as senhas
        if (this.formCadastro.get('password')!.value !== this.formCadastro.get('confirmPassword')!.value) {
            alert('As senhas não coincidem. Por favor, tente novamente.');
            return;
        }

        // Criar um objeto com os dados do formulário
        const userData: CadastroDto = this.formCadastro.value;

        // Chamar o serviço para enviar os dados para o backend
        this.cadastrarService.efetuarCadastro(userData).subscribe(
            response => {
                console.log('Resposta do servidor:', response);
                alert('Cadastro realizado com sucesso!');
                this.formCadastro.reset(); // Limpar o formulário após o sucesso
            },
            error => {
                console.error('Erro ao cadastrar usuário:', error);
                alert('Ocorreu um erro ao realizar o cadastro. Por favor, tente novamente.');
            }
        );
    }


}
