/* eslint max-len: [2, 120] */

import get from 'lodash/get';
import curry from 'lodash/curry';
import { expect } from 'chai';

import {
    Alexithymia,
    Amon,
    Emin,
    SPA,
} from 'containers/test-RU';

describe('i18n integrity', () => {
    function expect_translated_generic(metaData, prop) {
        const value = get(metaData, prop);

        if (Array.isArray(value)) {
            value.forEach(item => expect(item.text).not.to.contain(metaData.className));
        } else {
            expect(value).not.to.contain(metaData.className);
        }
    }

    function has_translated(prop) {
        return `has translated .${prop}`;
    }

    describe('Alexithymia/ru', () => {
        const metaData = new Alexithymia().metaData;
        const expect_translated = curry(expect_translated_generic)(metaData);

        it(has_translated('name'), () => expect_translated('name'));
        it(has_translated('description'), () => expect_translated('description'));
        it(has_translated('answers'), () => expect_translated('answers'));
        it(has_translated('questions'), () => expect_translated('questions'));
        it(has_translated('scales'), () => expect_translated('scales'));
    });

    describe('Amon/ru', () => {
        const metaData = new Amon().metaData;
        const expect_translated = curry(expect_translated_generic)(metaData);

        it(has_translated('name'), () => expect_translated('name'));
        it(has_translated('description'), () => expect_translated('description'));
        it(has_translated('answers'), () => expect_translated('answers'));
        it(has_translated('questions'), () => expect_translated('questions'));
        it(has_translated('scales'), () => expect_translated('scales'));
    });

    describe('Emin/ru', () => {
        const metaData = new Emin().metaData;
        const expect_translated = curry(expect_translated_generic)(metaData);

        it(has_translated('name'), () => expect_translated('name'));
        it(has_translated('description'), () => expect_translated('description'));
        it(has_translated('answers'), () => expect_translated('answers'));
        it(has_translated('questions'), () => expect_translated('questions'));
        it(has_translated('scales'), () => expect_translated('scales'));
    });

    describe('SPA/ru', () => {
        const metaData = new SPA().metaData;
        const expect_translated = curry(expect_translated_generic)(metaData);

        it(has_translated('name'), () => expect_translated('name'));
        it(has_translated('description'), () => expect_translated('description'));
        it(has_translated('answers'), () => expect_translated('answers'));
        it(has_translated('questions'), () => expect_translated('questions'));
        it(has_translated('scales'), () => expect_translated('scales'));
    });
});
