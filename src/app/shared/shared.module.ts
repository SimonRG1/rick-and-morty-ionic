import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    HttpClientModule
    ],
  providers: [RickAndMortyService]
})
export class SharedModule { }
