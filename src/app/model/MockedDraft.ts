import { Draft } from './Draft';

export const draft: Draft = {
    blue: {
        picks: [{
            name: 'Yasuo'
        }],
        combos: [
            {
                name: 'Rakan',
                priority: 100
            },
            {
                name: 'Orianna',
                priority: 70
            }, {
                name: 'Malphite',
                priority: 50
            }, {
                name: 'Braum',
                priority: 35
            }, {
                name: 'MonkeyKing',
                priority: 15
            }],
        banns: [{
            name: 'Aatrox'
        }, {
            name: 'Zed'
        }, {
            name: 'Ahri'
        }],
        openRoles: []
    },
    red: {
        combos: [],
        openRoles: [],
        picks: [{
            name: 'Yasuo',
            priority: 0,
            priorities: []
        }, {
            name: 'Malphite',
            priority: 0,
            priorities: []
        }, {
            name: 'Akali',
            priority: 0,
            priorities: []
        }, {
            name: 'Ezreal',
            priority: 0,
            priorities: []
        }, {
            name: 'Lulu',
            priority: 0,
            priorities: []
        }],
        banns: [{
            name: 'Urgoth',
            priority: 0
        }, {
            name: 'Caitlyn',
            priority: 0
        }, {
            name: 'Thresh',
            priority: 0
        }]
    }
};

