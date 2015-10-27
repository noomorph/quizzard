function addToSet(set, val) {
    set.add(val);
    return set;
}

export default function toSet(values) {
    let set = new Set(values);

    if (set.size === 0) {
        return values.reduce(addToSet, set);
    }

    return set;
}
