import { Component, Input } from '@angular/core';
import { Character } from '../model/Character';
import { Comp } from '../model/Comp';

@Component({
    selector: 'app-comps',
    templateUrl: './comps.component.html',
    styleUrls: ['./comps.component.scss']
})
export class CompsComponent {

    @Input() comps: Comp[];

    characterImageBaseUrl = 'https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/';

    getImageUrl(character: Character): string {

        if (character.name === 'None' || character.name === 'Picking') {
            return './assets/character/' + character.name + '.png';
        } else {
            return this.characterImageBaseUrl + character.name + '.png';
        }
    }
}
