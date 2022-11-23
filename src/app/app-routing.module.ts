import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { ManufacturingComponent } from './screen/manufacturing/manufacturing.component';

export const appRouteList: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
      path: 'manufacturing',
      component: ManufacturingComponent
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRouteList)
    ]
})
export class AppRoutingModule {
}
