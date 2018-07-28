import { expect } from 'chai';
import Emin from '../src/surveys/Emin';
import { should_equal } from './helpers';

describe(Emin.name, () => {
    let subject;

    beforeEach(() => subject = new Emin());

    function EminScale([s0, s1, s2, s3, s4]) {
        this['МП'] = { value: s0 };
        this['МУ'] = { value: s1 };
        this['ВП'] = { value: s2 };
        this['ВУ'] = { value: s3 };
        this['ВЭ'] = { value: s4 };
        this['МЭИ'] = { value: s0 + s1 };
        this['ВЭИ'] = { value: s2 + s3 + s4 };
        this['ПЭ'] = { value: s0 + s2 };
        this['УЭ'] = { value: s1 + s3 + s4 };
        this['ОУ'] = { value: s0 + s1 + s2 + s3 + s4 };
    }

    describe('when blank', () => {
        const expected = new EminScale([0, 0, 0, 0, 0]);

        it(should_equal(expected), () => {
            expect(subject.calculate()).to.eql(expected);
        });
    });

    describe('when filled with 0', () => {
        beforeEach(() => subject.answers.fill(0));

        const expected = new EminScale([9, 15, 21, 9, 12]);

        it(should_equal(expected), () => {
            expect(subject.calculate()).to.eql(expected);
        });
    });

    describe('when filled with 1', () => {
        beforeEach(() => subject.answers.fill(1));

        const expected = new EminScale([15, 15, 17, 10, 11]);

        it(should_equal(expected), () => {
            expect(subject.calculate()).to.eql(expected);
        });
    });

    describe('when filled with 2', () => {
        beforeEach(() => subject.answers.fill(2));

        const expected = new EminScale([21, 15, 13, 11, 10]);

        it(should_equal(expected), () => {
            expect(subject.calculate()).to.eql(expected);
        });
    });

    describe('when filled with 3', () => {
        beforeEach(() => subject.answers.fill(3));

        const expected = new EminScale([27, 15, 9, 12, 9]);

        it(should_equal(expected), () => {
            expect(subject.calculate()).to.eql(expected);
        });
    });
});
