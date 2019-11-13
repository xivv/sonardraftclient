import { Component, Input } from '@angular/core';
import { Character } from '../model/Character';
import { Role } from '../model/Role';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamBuilderComponent {

    picks: Character[] = Array<Character>(5);
    banns: Character[] = Array<Character>(5);
    combos: Character[];
    availableRoles: Role[] = Array<Role>(5);

    characterImageBaseUrl = 'https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/';

    setAvailableRoles(roles: Role[]) {
        this.availableRoles = roles;
    }

    addCombo(character: Character) {
        this.combos.push(character);
    }

    addBann(character: Character) {
        if (this.banns.length < 5) {
            this.banns.push(character);
        }
    }
    addPick(character: Character) {
        if (this.picks.length < 5) {
            this.picks.push(character);
        }
    }

    getImageUrl(character: Character): string {

        if (character.name === 'None' || character.name === 'Picking') {
            return './assets/character/' + character.name + '.png';
        } else {
            return this.characterImageBaseUrl + character.name + '.png';
        }
    }
}
