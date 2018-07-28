/* global describe, beforeEach, it, expect */
import { expect } from 'chai';
import Amon from '../src/surveys/Amon';
import { should_equal } from './helpers';

describe(Amon.name, () => {
    let subject;

    beforeEach(() => subject = new Amon());

    describe('when filled with +', () => {
        beforeEach(() => subject.answers.fill('+'));

        const expected = {
            A1: { value: 13 },
            A2: { value: 14 },
            A3: { value: 12 },
            C1: { value: 12 },
            C2: { value: 11 },
            C3: { value: 14 },
            LO1: { value: 11 },
            LO2: { value: 11 },
            LO3: { value: 11 },
            LI1: { value: 12 },
            LI2: { value: 12 },
            LI3: { value: 13 },
            N1: { value: 12 },
            N2: { value: 12 },
            N3: { value: 13 },
            S1: { value: 13 },
            S2: { value: 13 },
            S3: { value: 11 },
        };

        it(should_equal(expected), () => {
            expect(subject.calculate()).to.eql(expected);
        });
    });

    describe('when filled with -', () => {
        beforeEach(() => subject.answers.fill('-'));

        const expected = {
            A1: { value: 0 },
            A2: { value: 0 },
            A3: { value: 0 },
            C1: { value: 0 },
            C2: { value: 0 },
            C3: { value: 0 },
            LO1: { value: 0 },
            LO2: { value: 0 },
            LO3: { value: 0 },
            LI1: { value: 0 },
            LI2: { value: 0 },
            LI3: { value: 0 },
            N1: { value: 0 },
            N2: { value: 0 },
            N3: { value: 0 },
            S1: { value: 0 },
            S2: { value: 0 },
            S3: { value: 0 },
        };

        it(should_equal(expected), () => {
            expect(subject.calculate()).to.eql(expected);
        });
    });
});
/* eslint-enable func-names */
/* eslint-enable camelcase */
