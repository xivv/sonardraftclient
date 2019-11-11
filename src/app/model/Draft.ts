import { Team } from './Team';
import { Comp } from './Comp';

export interface Draft {
    blue: Team;
    red: Team;
    comps: Comp[];
}
