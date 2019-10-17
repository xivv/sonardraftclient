import { Component } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { delay } from 'q';
import { Character } from './model/Character';
import { CommService } from './communication/comm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  characterImageBaseUrl = 'https://ddragon.leagueoflegends.com/cdn/9.20.1/img/champion/';
  title = 'sonardraftclient';

  constructor(public commService: CommService) {

  }


  getImageUrl(character: Character): string {

    if (character.name === 'None' || character.name === 'Picking') {
      return './assets/character/' + character.name + '.png';
    } else {
      return this.characterImageBaseUrl + character.name + '.png';
    }
  }

}
