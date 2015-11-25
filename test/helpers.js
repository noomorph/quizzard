const _ = require('lodash');

export function should_equal(expectedScales) {
    const arr = _(expectedScales).values().pluck('value').value().join(', ');
    return `has scales = [${arr}]`;
}
