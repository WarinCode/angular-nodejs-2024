import { Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { MyBootstrapComponent } from './my-bootstrap/my-bootstrap.component';
import { MyFormValidateComponent } from './my-form-validate/my-form-validate.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';

export const routes: Routes = [
    {
        path: "firstPage/:id",
        component: FirstPageComponent
    },
    {
        path: "secondPage",
        component: SecondPageComponent
    }, 
    {
        path: "mybootstrap",
        component: MyBootstrapComponent
    },
    {
        path: "myformvalidat",
        component: MyFormValidateComponent
    },
    {
        path: "parent",
        component: ParentComponentComponent
    }
];
