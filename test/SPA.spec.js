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
});
