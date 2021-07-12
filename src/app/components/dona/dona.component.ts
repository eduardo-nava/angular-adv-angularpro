import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
// COMPONENTE HIJO
export class DonaComponent implements OnInit {

  @Input("title") titulo: string = "Sin Titulo";
  @Input("labels") labels:string[];
  @Input("data") data: number[];

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [];

  constructor() { 
  }

  ngOnInit(): void {
    //console.log(this.data);
    this.doughnutChartLabels = this.labels;
    this.doughnutChartData = [ this.data ]
    console.log(this.doughnutChartData)
  }

}
