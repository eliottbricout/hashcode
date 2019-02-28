'use strict';

const _ = require('lodash');

// 1 - Prendre les verticaux et les horizontaux pour n'avoir que des slides
const getSlides = (data) => {
    const partitioned = _.partition(data, 'vertical');
    return [ 
        ...partitioned[1],
        ..._.chunk(partitioned[0], 2)
            .map(chunk => chunk.reduce((acc, curr) => ({ ...acc, id: acc.id ? `${acc.id} ${curr.id}` : curr.id, tags: _.union(acc.tags, curr.tags) }), { tags: [] }))
    ];
};

const checkScore = (p1, p2) => {
    return _.intersection(p1.tags, p2.tags).length;
}


const solves = (bestScore, picture, matchWith, result) => {
    if (!matchWith || matchWith.length <= 0) {
        return;
    }

    let score;
    let best;
    let max = bestScore;

    for(let pic of matchWith){
        score = checkScore(pic, picture) - bestScore;
        if (score < 1) {
            best = pic;
            break;
        }
        if (score < max) {
            best = pic;
            max = score;
        }
    }

    result.push(best)
    solves(bestScore, best, matchWith.filter(e => e !== best), result);
}

const searchResult = (data) => {
    const slides = getSlides(data);
    const result = []
    Object.entries(_.groupBy(slides, 'tags.length'))
        .forEach(([ occurrencies, partitionedSlides ]) => {
            result.push(partitionedSlides[0]);
            solves(occurrencies, partitionedSlides[0], partitionedSlides.slice(1), result)
        });

    return result.map(el => el.id);
};

// 1er run : Dumb 303 595 🦄
// 2nd run : Regrouper les tags : 364 076
// const searchResult = (data) => {
//     const partitioned = _.partition(data, 'vertical');
//     return [ ...partitioned[1].map(el => [el.id]), ..._.chunk(partitioned[0], 2).map((arr) => arr.map((el) => el.id)) ];
// };

module.exports = {searchResult};