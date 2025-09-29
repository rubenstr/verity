import { Injectable, Signal, signal } from "@angular/core";

type StateValue = string | null;

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {
  #state = signal<StateValue>(null);

  setState(v: StateValue){
    console.log('Valor service:', JSON.stringify(v))
    if(!v){ v= null}
    this.#state.set(v);
  }

  getState(): Signal<StateValue>{
    return this.#state.asReadonly();
  }

  constructor() { }
}
