/* eslint max-len: [2, 120] */

import buildTranslationFunction from 'translate.js';
import get from 'lodash/get';
import curry from 'lodash/curry';
import { buildMetaData } from 'surveys/common/builder';
import { expect } from 'chai';

import { metaData as AlexithymiaMeta } from 'surveys/Alexithymia';
import { metaData as AmonMeta } from 'surveys/Amon';
import { metaData as EminMeta } from 'surveys/Emin';
import { metaData as SPAMeta } from 'surveys/SPA';

import AlexithymiaRU from 'surveys/Alexithymia/ru';
import AmonRU from 'surveys/Amon/ru';
import EminRU from 'surveys/Emin/ru';
import SPARU from 'surveys/SPA/ru';

describe('i18n integrity', () => {
    function expect_translated_generic(testName, metaData, prop) {
        expect(get(metaData, prop)).not.to.contain(testName);
    }

    function expect_translated_array_generic(testName, metaData, prop) {
        metaData[prop].forEach(item => expect(item.text).not.to.contain(testName));
    }

    function build_metadata_generic(metaData, dictionary) {
        const translate = buildTranslationFunction(dictionary, { debug: false });
        return buildMetaData(metaData, translate);
    }

    function has_translated(prop) {
        return `has translated .${prop}`;
    }

    describe('Alexithymia/ru', () => {
        const metaData = build_metadata_generic(AlexithymiaMeta, AlexithymiaRU);
        const expect_translated = curry(expect_translated_generic)('Alexithymia', metaData);
        const expect_translated_array = curry(expect_translated_array_generic)('Alexithymia', metaData);

        it(has_translated('name'), () => expect_translated('name'));
        it(has_translated('description'), () => expect_translated('description'));
        it(has_translated('answers'), () => expect_translated_array('answers'));
        it(has_translated('questions'), () => expect_translated_array('questions'));
        it(has_translated('scales'), () => expect_translated_array('scales'));
    });

    describe('Amon/ru', () => {
        const metaData = build_metadata_generic(AmonMeta, AmonRU);
        const expect_translated = curry(expect_translated_generic)('Amon', metaData);
        const expect_translated_array = curry(expect_translated_array_generic)('Amon', metaData);

        it(has_translated('name'), () => expect_translated('name'));
        it(has_translated('description'), () => expect_translated('description'));
        it(has_translated('answers'), () => expect_translated_array('answers'));
        it(has_translated('questions'), () => expect_translated_array('questions'));
        it(has_translated('scales'), () => expect_translated_array('scales'));
    });

    describe('Emin/ru', () => {
        const metaData = build_metadata_generic(EminMeta, EminRU);
        const expect_translated = curry(expect_translated_generic)('Emin', metaData);
        const expect_translated_array = curry(expect_translated_array_generic)('Emin', metaData);

        it(has_translated('name'), () => expect_translated('name'));
        it(has_translated('description'), () => expect_translated('description'));
        it(has_translated('answers'), () => expect_translated_array('answers'));
        it(has_translated('questions'), () => expect_translated_array('questions'));
        it(has_translated('scales'), () => expect_translated_array('scales'));
    });

    describe('SPA/ru', () => {
        const metaData = build_metadata_generic(SPAMeta, SPARU);
        const expect_translated = curry(expect_translated_generic)('SPA', metaData);
        const expect_translated_array = curry(expect_translated_array_generic)('SPA', metaData);

        it(has_translated('name'), () => expect_translated('name'));
        it(has_translated('description'), () => expect_translated('description'));
        it(has_translated('answers'), () => expect_translated_array('answers'));
        it(has_translated('questions'), () => expect_translated_array('questions'));
        it(has_translated('scales'), () => expect_translated_array('scales'));
    });
});
