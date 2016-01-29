export default function createBlankScales(scales) {
    let blank = {};

    for (let i = 0; i < scales.length; i++) {
        blank[scales[i].id] = 0;
    }

    return blank;
}
