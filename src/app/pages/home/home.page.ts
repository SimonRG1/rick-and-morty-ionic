import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  characters: any[] = [];
  params = {} as any;

  constructor(
    private rickAndMortySvc: RickAndMortyService
  ) { }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }

  //Obtener personajes

  getCharacters(event?: any) {
    this.params.page++;

    this.rickAndMortySvc.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.characters.push(...res.results);
        console.log(this.characters);

        if (event) {
          event.target.complete();
        }
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }


  //Buscar personajes

  searchCharacters() {
    this.params.page++;

    this.rickAndMortySvc.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.characters = res.results;

      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
