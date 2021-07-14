import { Component, OnInit } from '@angular/core';
import { AccountSettingService } from '../services/account-setting.service';
declare function customFunction();

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styles: [
  ]
})
export class PageComponent implements OnInit {

  constructor( private accountSettingService: AccountSettingService) { }

  ngOnInit(): void {
    customFunction();
  }

}
