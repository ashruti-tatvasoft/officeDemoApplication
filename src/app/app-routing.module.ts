import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { AboutComponent } from './module/about/about.component';
import { ContactComponent } from './module/contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, title: 'Home'},
  { path: 'about', component: AboutComponent, title: 'About'},
  { path: 'contact', component: ContactComponent, title: 'Contact'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
