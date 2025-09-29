import { Injectable, Signal, signal } from "@angular/core";

type StateValue = {
  nome: string;
  dataNascimento: string;
  cpf: string;
  telefone:string;
}

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {
  #state = signal<StateValue>({nome: '', dataNascimento: '',  cpf: '',  telefone:''});

setState(v: Partial<StateValue>) {
  this.#state.set({
    ...this.#state(),
    ...v
  });
}

  getState(): Signal<StateValue>{
    return this.#state.asReadonly();
  }

  constructor() { }
}
