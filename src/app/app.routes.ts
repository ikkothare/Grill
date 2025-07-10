import { Routes } from '@angular/router';
import { CsharpComponent } from './csharp/csharp.component';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { AzureComponent } from './azure/azure.component';
import { SqlComponent } from './sql/sql.component';
import { OtherComponent } from './other/other.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
     { path:'', component:HomeComponent },
    { path:'csharp', component:CsharpComponent },
    { path:'angular', component:AngularComponent, canActivate:[AuthGuard] },
    { path:'azure', component:AzureComponent },
    { path:'sql', component:SqlComponent },
    { path:'other', component:OtherComponent },
];
