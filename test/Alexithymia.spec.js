/* global describe, beforeEach, it, expect */
import { expect } from 'chai';
import Alexithymia from '../src/surveys/Alexithymia';
import { should_equal } from './helpers';

describe(Alexithymia.name, () => {
    let subject;

    beforeEach(() => subject = new Alexithymia());

    function calculate(value) {
        return 16 * (1 + value) + 10 * (5 - value);
    }

    describe('when is not filled', () => {
        const expected = { A: { value: 0 } };

        it(should_equal(expected), () => {
            expect(subject.calculate()).to.eql(expected);
        });
    });

    describe('when is filled with 0', () => {
        beforeEach(() => subject.answers.fill(0));

        const expected = { A: { value: calculate(0) } };

        it(should_equal(expected), () => {
            expect(subject.calculate()).to.eql(expected);
        });
    });

    describe('when is filled with 1', () => {
        beforeEach(() => subject.answers.fill(1));

        const expected = { A: { value: calculate(1) } };

        it(should_equal(expected), () => {
            expect(subject.calculate()).to.eql(expected);
        });
    });

    describe('when is filled with 2', () => {
        beforeEach(() => subject.answers.fill(2));

        const expected = { A: { value: calculate(2) } };

        it(should_equal(expected), () => {
            expect(subject.calculate()).to.eql(expected);
        });
    });

    describe('when is filled with 3', () => {
        beforeEach(() => subject.answers.fill(3));

        const expected = { A: { value: calculate(3) } };

        it(should_equal(expected), () => {
            expect(subject.calculate()).to.eql(expected);
        });
    });

    describe('when is filled with 4', () => {
        beforeEach(() => subject.answers.fill(4));

        const expected = { A: { value: calculate(4) } };

        it(should_equal(expected), () => {
            expect(subject.calculate()).to.eql(expected);
        });
    });
});
/* eslint-enable func-names */
/* eslint-enable camelcase */
