import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  charactertId: string = ''
  character = null as any
  episodes: any[] = []

  constructor(
    private actRoute: ActivatedRoute,
    private rickAndMortySvc: RickAndMortyService
  ) {
    this.charactertId = this.actRoute.snapshot.paramMap.get('id') as string
   }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getCharacter()
    
  }

  getCharacter(event?: any) {
    this.rickAndMortySvc.getCharacterById(this.charactertId).subscribe({
      next: (res) => {
        this.character = res
        this.getEpisodes()
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  getEpisodes() {

    for(let url of this.character.episode) {
      this.rickAndMortySvc.getByUrl(url).subscribe({
        next: (res) => {
          this.episodes.push(res)
        },
        error: (error) => {
          console.error(error)
        }
      })
    }
  }

}
