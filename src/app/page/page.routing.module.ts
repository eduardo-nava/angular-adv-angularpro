import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PageComponent } from "./page.component";
import { ProgressComponent } from "./progress/progress.component";

const router: Routes = [
    { path: 'dashboard', 
        component: PageComponent, 
        children: [
            { path: '', component: DashboardComponent },
            { path: 'grafica1', component: Grafica1Component },
            { path: 'progress', component: ProgressComponent }
        ] 
    },
]
@NgModule({
    declarations:[],
    imports:[ RouterModule.forChild(router)],
    exports: [ RouterModule ]
})

export class PageRoutingModule {}