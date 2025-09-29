import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedFormService {
  form = new FormGroup({
    nome: new FormControl('', { nonNullable: true }),
    dataAniversario: new FormControl('', { nonNullable: true }),
    cpf: new FormControl('', { nonNullable: true }),
    telefone: new FormControl('', { nonNullable: true }),
    endereco: new FormControl('', { nonNullable: true }),
    bairro: new FormControl('', { nonNullable: true }),
    cep: new FormControl('', { nonNullable: true }),
    cidade: new FormControl('', { nonNullable: true }),
    estado: new FormControl('', { nonNullable: true }),
    profissao: new FormControl('', { nonNullable: true }),
    empresa: new FormControl('', { nonNullable: true }),
    salario: new FormControl('', { nonNullable: true }),

  });
}
