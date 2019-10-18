import { Component, Input } from '@angular/core';
import { Team } from '../model/Team';
import { Character } from '../model/Character';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent {

    @Input() team: Team;

    characterImageBaseUrl = 'https://ddragon.leagueoflegends.com/cdn/9.20.1/img/champion/';

    getImageUrl(character: Character): string {

        if (character.name === 'None' || character.name === 'Picking') {
            return './assets/character/' + character.name + '.png';
        } else {
            return this.characterImageBaseUrl + character.name + '.png';
        }
    }
}