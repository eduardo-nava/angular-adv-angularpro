import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountSettingService {

  private linkTheme = document.querySelector("#theme");

  constructor() { 
    const url = localStorage.getItem("url") || "./assets/css/colors/purple.css" ;
    this.linkTheme.setAttribute("href", url);
    localStorage.setItem("url", url);
  }

  changeTheme(theme: string){
    let url = `./assets/css/colors/${ theme }.css`;
    localStorage.setItem("url", url);
    this.linkTheme.setAttribute("href", url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    let nodes: NodeListOf<Element> = document.querySelectorAll(".selector");
    nodes.forEach(elem => {
      elem.classList.remove("working");
      let theme = elem.getAttribute("data-theme");
      let url = `./assets/css/colors/${ theme }.css`;
      if (url == localStorage.getItem("url")) {
        elem.classList.add("working");
      }
    });
  }
}
