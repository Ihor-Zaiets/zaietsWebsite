import { Routes } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'test', component: TestComponent},
  {path: '**', redirectTo: ''},
];
