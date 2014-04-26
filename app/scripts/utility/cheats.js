/* global test*/

window._bypass = function () {
    var i, j;
    for (i = 0; i < test.questions.length; i++) {
        j = Math.round((test.answers.length - 1) * Math.random());
        test.fill(test.answers[j].value)();
    }
};

window._bypass2 = function (answers) {
    var i, answer;
    answers = answers || [0, -1, -1,
            1, -2, 2, -2, -1, -2, -2, -1,
            2, -1, -2, -1, 2, 2, 2, 2, 2,
            -1, 2, 1, 0, -1, 1, -1, 2, 2,
            -2, -2, -1, -1, 2, -1, 2, 2,
            -1, 1, -2, 2, -1, -1, 0, -1,
            1, 1, 1, 2, 1, 2, 2, -2, -1,
            -1, -1, 1, -2, 1, 1, 2, -2,
            -2, -1, -1, -1, -2, -2, 2, 2,
            -2, -2, -2, 1, -1];

    for (i = 0; i < test.questions.length; i++) {
        answer = answers[i];
        test.fill(answer)();
    }
};

