'use strict';

const _ = require('lodash');

// 1. Faire un tableau des tags avec les occurences
const createTagOccurrenciesArray = (input) => {
    return input.reduce((acc, curr) => {
        curr.tags.forEach((tag) => { if (!acc[tag]) acc[tag] = []; acc[tag].push(curr)});
        return acc;
    }, {});
}

const searchResult = (data) => {
    let occurrencies = createTagOccurrenciesArray(data);

    // 2. Prendre le tableau dans l'ordre croissant d'occurrences
    occurrencies = Object.values(occurrencies).sort((a, b) => a.length - b.length); 

    // 3. Créer des slides à partir de ce tableau, en faisant attention à ne pas reprendre plusieurs fois la même
    const slideShow = [];
    const usedPictures = [];
    let pendingVertical;
    occurrencies.forEach((pictures) => {
        pictures
            .filter((picture) => usedPictures.indexOf(picture.id) === -1)
            .forEach((picture) => {
                if (!picture.vertical) {
                    slideShow.push([picture.id]);
                } else {
                    if (pendingVertical) {
                        slideShow.push([pendingVertical.id, picture.id]);
                        pendingVertical = null;
                    } else {
                        pendingVertical = picture;
                    }
                }
                usedPictures.push(picture.id);
            });
    });

    return slideShow;
};

// 303 595 🦄
// const searchResult = (data) => {
//     const partitioned = _.partition(data, 'vertical');
//     return [ ...partitioned[1].map(el => [el.id]), ..._.chunk(partitioned[0], 2).map((arr) => arr.map((el) => el.id)) ];
// };

module.exports = {searchResult};