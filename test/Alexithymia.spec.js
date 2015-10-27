/* global describe, beforeEach, it, expect */
/* eslint-disable func-names */
/* eslint-disable camelcase */
import Alexithymia from 'surveys/Alexithymia';

describe(Alexithymia.name, function () {
    let subject;

    beforeEach(() => subject = new Alexithymia());

    describe('when blank', function () {
        it('has A scale = NaN', function () {
            expect(subject.calculate().A.value).to.eq(NaN);
        });
    });

    function when_filled_with(value) {
        describe(`when filled with ${value}`, function () {
            beforeEach(function () {
                subject.answers = subject.answers.map(() => value);
            });

            it('has A scale = NaN', function () {
                expect(subject.calculate().A.value).to.eq(16 * (1 + value) + 10 * (5 - value));
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
