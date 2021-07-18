import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  menu: any[] = []

  constructor() {
     this.menu = [{
       titulo: "Dashboard",
       icono : "mdi mdi-gauge",
       subMenu: [
         {
           titulo: "Dashboard",
           url: "/"
         },
         {
           titulo: "Progress",
           url: "progress"
         },
         {
           titulo: "Grafica",
           url: "grafica1"
         },
         {
          titulo: "Observables",
          url: "observables"
        }
       ]
     }];
   }
}
