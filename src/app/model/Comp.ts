import { Character } from './Character';
import { CompCharacter } from './CompCharacter';

export interface Comp {
    name: String;
    picks: CompCharacter[];
    banns: Character[];
}
