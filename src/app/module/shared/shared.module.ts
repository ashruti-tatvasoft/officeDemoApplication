import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { AngularMaterialModule } from './angular-material.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';



@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AngularMaterialModule,
    FormsModule,
    RouterModule,
    HeaderComponent,
    LayoutComponent,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers:[
    DatePipe,
    DecimalPipe,
  ]
})
export class SharedModule { }
