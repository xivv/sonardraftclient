import { Character } from './Character';
import { Role } from './Role';

export interface Team {
    picks: Character[];
    banns: Character[];
    combos: Character[];
    openRoles: Role[];
}
