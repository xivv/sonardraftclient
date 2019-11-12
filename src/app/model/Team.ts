import { Character } from './Character';
import { Role } from './Role';
import { Comp } from './Comp';

export interface Team {
    picks: Character[];
    banns: Character[];
    combos: Character[];
    openRoles: Role[];
    comps: Comp[];
}
