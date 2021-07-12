import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent{

  public progreso1: number = 10;
  public progreso2: number = 20;

  constructor() { }

  get cambiarProgreso1(){
    return `${ this.progreso1 }%`;
  }

  get cambiarProgreso2(){
    return `${ this.progreso2 }%`;
  }
  
}
