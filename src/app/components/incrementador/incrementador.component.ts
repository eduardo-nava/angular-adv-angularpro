import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
// componente hijos😛
export class IncrementadorComponent  {

  @Input() progreso: number = 20;
  @Input() btnClass: string = "btn-primary";
  @Output("valor") emitValor:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  public cambiarValor(valor: number){
  
    if (this.progreso >= 100 && valor > 0) {
      this.emitValor.emit(100);
      return this.progreso = 100; 
    }

    if (this.progreso <= 0 && valor < 0) {
      this.emitValor.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    this.emitValor.emit(this.progreso);
    // console.log(this.progreso);
  }


  public actualizarValor( newValor: number ){
    if (newValor >= 100) {
      this.progreso = 100;
    }else if (newValor <= 0) {
      this.progreso = 0;
    }else{
      this.progreso = newValor;
    }
    this.emitValor.emit(this.progreso);
  }
}
