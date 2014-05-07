/* global test*/

window._bypass = function (xx) {
    var i, j;

    test.user.name("Иван");
    test.user.age("40");
    test.user.gender('м');
    test.user.agree(true);
    test.start();

    for (i = 0; i < test.questions.length; i++) {
        j = Math.round((test.answers.length - 1) * Math.random());
        setTimeout(test.fill(xx !== undefined ? xx : test.answers[j].value), i * 75);
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

