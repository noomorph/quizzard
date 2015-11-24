import SPA from 'surveys/SPA';

describe('SPA Test', function () {
    let subject;

    beforeEach(function () {
        subject = new SPA();
    });

    describe('even when empty', function () {
        it('should calculate without errors', function () {
            expect(() => subject.calculate()).not.to.throw();
        });
    });

    let { when_filled_with, scale_eq } = require('./helpers')({
        describe, beforeEach, it, expect, subject: () => subject,
    });

    function test_spa(expectedScales) {
        const {
            1: [e1a, e1b],
            2: [e2a, e2b],
            3: [e3a, e3b],
            4: [e4a, e4b],
            5: [e5a, e5b],
            6: [e6a, e6b],
            7: [e7a, e7b],
            8: e8
        } = expectedScales;

        scale_eq('1a', e1a);
        scale_eq('1b', e1b);
        scale_eq('2a', e2a);
        scale_eq('2b', e2b);
        scale_eq('3a', e3a);
        scale_eq('3b', e3b);
        scale_eq('4a', e4a);
        scale_eq('4b', e4b);
        scale_eq('5a', e5a);
        scale_eq('5b', e5b);
        scale_eq('6a', e6a);
        scale_eq('6b', e6b);
        scale_eq('7a', e7a);
        scale_eq('7b', e7b);
        scale_eq('8', e8);
        scale_eq('A', Math.round(100 * e1a / (e1a + e1b)));
        scale_eq('S', Math.round(100 * e3a / (e3a + e3b)));
        scale_eq('L', Math.round(100 * 1.2 * e4a / (1.2 * e4a + e4b)));
        scale_eq('E', Math.round(100 * e5a / (e5a + e5b)));
        scale_eq('I', Math.round(100 * e6a / (e6a + 1.4 * e6b)));
        scale_eq('D', Math.round(100 * 2 * e7a / (2 * e7a + e7b)));
    }

    [undefined, 0, 2, 3, 4, 5, 6].forEach(value => {
        when_filled_with(value, function () {
            test_spa({
                1: [34 * value, 34 * value],
                2: [5 * value, 4 * value],
                3: [11 * value, 7 * value],
                4: [6 * value, 7 * value],
                5: [7 * value, 7 * value],
                6: [14 * value, 8 * value],
                7: [3 * value, 6 * value],
                8: 5 * value,
            });
        });
    });
});
