var seasons = {
    Akhet: 0,
    Peret: 1,
    Shemu: 2,
    properties: {
        0: { name: 'Akhet' },
        1: { name: 'Peret' },
        2: { name: 'Shemu' }
    }
};

var buildingType = {
    FARM: 0,
    HUNTER: 1,
    WEAVER: 2,
    SMITH: 3,
    MINER: 4,
    POTTER: 5,
    properties: {
        0: { name: 'farm' },
        1: { name: 'Hunters', perHundred: 1 },
        2: { name: 'Weavers', perHundred: 1.75 },
        3: { name: 'Smiths', perHundred: 1.875 },
        4: { name: 'Miners', perHundred: 1.5 },
        5: { name: 'Potters', perHundred: 1.125 }
    }
};

var cityType = {
    TINY: 0,
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
    METROPOLIS: 4,
    properties: {
        0: { name: 'tiny', multiplier: 0.66 },
        1: { name: 'small', multiplier: 0.75 },
        2: { name: 'medium', multiplier: 1},
        3: { name: 'large', multiplier: 1.125 },
        4: { name: 'metropolis', multiplier: 1.25 }
    }
}