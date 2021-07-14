import { Component, OnInit } from '@angular/core';
import { AccountSettingService } from 'src/app/services/account-setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector("#theme");
  public nodes: NodeListOf<Element> ;

  constructor( private accountSettingService: AccountSettingService) { }

  ngOnInit(): void {
    this.accountSettingService.checkCurrentTheme();
  }

  changeTheme(theme: string){
    this.accountSettingService.changeTheme(theme);
  }

}
