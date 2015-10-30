import Emin from 'surveys/Emin';

describe(Emin.name, function () {
    let subject;

    let { when_filled_with, scale_eq } = require('./helpers')({
        describe, beforeEach, it, expect, subject: () => subject,
    });

    beforeEach(() => subject = new Emin());

    function test_emin(expectedScales) {
        const [s0, s1, s2, s3, s4] = expectedScales;

        scale_eq('МП', s0);
        scale_eq('МУ', s1);
        scale_eq('ВП', s2);
        scale_eq('ВУ', s3);
        scale_eq('ВЭ', s4);
        scale_eq('МЭИ', s0 + s1);
        scale_eq('ВЭИ', s2 + s3 + s4);
        scale_eq('ПЭ', s0 + s2);
        scale_eq('УЭ', s1 + s3 + s4);
        scale_eq('ОУ', s0 + s1 + s2 + s3 + s4);
    }

    when_filled_with(undefined, function () {
        test_emin([NaN, NaN, NaN, NaN, NaN]);
    });

    when_filled_with(0, function () {
        test_emin([9, 15, 21, 9, 12]);
    });

    when_filled_with(1, function () {
        test_emin([15, 15, 17, 10, 11]);
    });

    when_filled_with(2, function () {
        test_emin([21, 15, 13, 11, 10]);
    });

    when_filled_with(3, function () {
        test_emin([27, 15, 9, 12, 9]);
    });
});
