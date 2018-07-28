export default function range(start, end, step) {
    let number;

    if (!step) {
        return range(start, end, 1);
    }

    if (end === undefined) {
        return range(0, start, step);
    }

    const arr = [];

    for (number = start; number < end; number += step) {
        arr.push(number);
    }

    return arr;
}
