import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {

  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1: number[] = [350, 450, 100];

  public labels2: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data2: number[] = [200, 190, 400];

  public labels3: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data3: number[] = [100, 300, 800];

  public labels4: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data4: number[] = [100, 987, 100];
  
  constructor() { }

  ngOnInit(): void {
  }

}
