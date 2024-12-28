import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
const routes: Routes = [
  { path: '', component: HomeComponent }, // Home
  { path: 'about', component: AboutComponent }, // About
  { path: 'services', component: ServicesComponent }, // Services/Products
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
