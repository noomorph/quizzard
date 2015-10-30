export default function initialize({ describe, beforeEach, it, expect, subject }) {
    return {
        scale_eq(scale, expected) {
            it(`has ${scale} scale = ${expected}`, function () {
                let actual = subject().calculate()[scale].value;

                if (isNaN(expected)) {
                    expect(actual).to.be.NaN; // eslint-disable-line
                } else {
                    expect(actual).to.eq(expected);
                }
            });
        },
        when_filled_with(value, inner) {
            describe(`when filled with ${value}`, function () {
                beforeEach(function () {
                    subject().answers.fill(value);
                });

                inner();
            });
        },
    };
}
