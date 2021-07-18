import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ObservablesComponent } from "./observables/observables.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PageComponent } from "./page.component";
import { ProgressComponent } from "./progress/progress.component";

const router: Routes = [
    { path: 'dashboard', 
        component: PageComponent, 
        children: [
            { path: '', component: DashboardComponent, data: { titulo: "Dashboard"} },
            { path: 'grafica1', component: Grafica1Component, data: {titulo: "Grafica #1"} },
            { path: 'progress', component: ProgressComponent, data: {titulo: "Progres Bar"} },
            { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: "Configuracion de Cuenta"} },
            { path: 'observables', component: ObservablesComponent, data: { titulo: "Observables y RXJS"}}
        ] 
    },
]
@NgModule({
    declarations:[],
    imports:[ RouterModule.forChild(router)],
    exports: [ RouterModule ]
})

export class PageRoutingModule {}