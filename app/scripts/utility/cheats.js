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
    answers = answers || [
        3, 2, 1, -2, 3, -1,
        -1, -1, -1, -1, -1, -1, -1,
        3, -3, -3, -3, -3, -3, -3,
        -1, -1, -1, -1,
        3, -2, -1, -1, -1, -3, 3,
        -3, 3, 3, -3, -3, -3, -3,
        3, -3, -3, 3, -3, -3
    ];

    for (i = 0; i < test.questions.length; i++) {
        answer = answers[i];
        setTimeout(test.fill(answer), i * 100);
    }
};

