/* global describe, beforeEach, it, expect */
/* eslint-disable func-names */
/* eslint-disable camelcase */
import Amon from 'surveys/Amon';

describe(Amon.name, function () {
    let subject;

    beforeEach(() => subject = new Amon());

    describe('when blank', function () {
        it('has A scale = NaN', function () {
            expect(subject.calculate().A.value).to.eq(NaN);
        });
    });

    function scale_eq(scale, value) {
        it(`has ${scale} scale = ${value}`, function () {
            expect(subject.calculate().scale.value).to.eq(value);
        });
    }

    describe('when filled with YES', function () {
        beforeEach(function () {
            subject.answers = subject.answers.map(() => '+');
        });

        scale_eq('A1', 0);
        scale_eq('A2', 0);
        scale_eq('A3', 0);
        scale_eq('C1', 0);
        scale_eq('C2', 0);
        scale_eq('C3', 0);
        scale_eq('LO1', 0);
        scale_eq('LO2', 0);
        scale_eq('LO3', 0);
        scale_eq('LI1', 0);
        scale_eq('LI2', 0);
        scale_eq('LI3', 0);
        scale_eq('N1', 0);
        scale_eq('N2', 0);
        scale_eq('N3', 0);
        scale_eq('S1', 0);
        scale_eq('S2', 0);
        scale_eq('S3', 0);
    });

    describe('when filled with NO', function () {
        beforeEach(function () {
            subject.answers = subject.answers.map(() => '-');
        });

        scale_eq('A1', 0);
        scale_eq('A2', 0);
        scale_eq('A3', 0);
        scale_eq('C1', 0);
        scale_eq('C2', 0);
        scale_eq('C3', 0);
        scale_eq('LO1', 0);
        scale_eq('LO2', 0);
        scale_eq('LO3', 0);
        scale_eq('LI1', 0);
        scale_eq('LI2', 0);
        scale_eq('LI3', 0);
        scale_eq('N1', 0);
        scale_eq('N2', 0);
        scale_eq('N3', 0);
        scale_eq('S1', 0);
        scale_eq('S2', 0);
        scale_eq('S3', 0);
    });
});
/* eslint-enable func-names */
/* eslint-enable camelcase */
