/* global test */

export function _bypass(xx) {
    test.user.name('Иван');
    test.user.age('40');
    test.user.gender('м');
    test.user.agree(true);
    test.start();

    for (let index = 0; index < test.questions.length; index++) {
        const answerIndex = Math.round((test.answers.length - 1) * Math.random());
        setTimeout(test.fill(xx !== undefined ? xx : test.answers[answerIndex].value), index * 75);
    }
}

export function _bypass2(answers = [
    3, 2, 1, -2, 3, -1, -1, -1, -1, -1, -1, -1, -1, 3, -3, -3, -3, -3, -3, -3, -1, -1, -1, -1,
    3, -2, -1, -1, -1, -3, 3, -3, 3, 3, -3, -3, -3, -3, 3, -3, -3, 3, -3, -3,
]) {
    for (let index = 0; index < test.questions.length; index++) {
        const answer = answers[index];
        setTimeout(test.fill(answer), index * 100);
    }
}
