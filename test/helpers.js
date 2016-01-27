import values from 'lodash/values';
import map from 'lodash/map';

export function should_equal(expectedScales) {
    const arr = map(values(expectedScales), 'value').join(', ');
    return `has scales = [${arr}]`;
}
