/* global describe, beforeEach, it, expect */
/* eslint-disable func-names */
/* eslint-disable camelcase */
import Alexithymia from 'surveys/Alexithymia';

describe(Alexithymia.name, function () {
    let subject;

    beforeEach(() => subject = new Alexithymia());

    describe('when blank', function () {
        it('has A scale = 0', function () {
            expect(subject.calculate().A.value).to.eq(0);
        });
    });

    function when_filled_with(value) {
        const expected = 16 * (1 + value) + 10 * (5 - value);

        describe(`when filled with ${value}`, function () {
            beforeEach(function () {
                subject.answers.fill(value);
            });

            it(`has A scale = ${expected}`, function () {
                expect(subject.calculate().A.value).to.eq(expected);
            });
        });
    }

    when_filled_with(0);
    when_filled_with(1);
    when_filled_with(2);
    when_filled_with(3);
    when_filled_with(4);
});
/* eslint-enable func-names */
/* eslint-enable camelcase */
