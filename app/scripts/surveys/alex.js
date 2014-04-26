/* exported Alexithymia */

function Alexithymia() {
    this.id = "alex";
    this.name = "Торонтская алекситимическая шкала";

    this.instruction = 'Прочтите следующие утверждения. ' +
        'На каждое утверждение нужно дать один из пяти ответов: (1) совершенно не согласен, (2) скорее не согласен, (3) ни то, ни другое, (4) скорее согласен, (5) совершенно согласен.';


    this.answers = [
        { value: 0, cls: 'a a0', text: 'Со<wbr/>вер<wbr/>шен<wbr/>но<br/>не сог<wbr/>ла<wbr/>сен' },
        { value: 1, cls: 'a a1', text: 'Скорее<br/>не сог<wbr/>ла<wbr/>сен'     },
        { value: 2, cls: 'a a2', text: 'Ни то,<br/>ни дру<wbr/>гое'       },
        { value: 3, cls: 'a a3', text: 'Скорее<br/>сог<wbr/>ла<wbr/>сен'     },
        { value: 4, cls: 'a a4', text: 'Со<wbr/>вер<wbr/>шен<wbr/>но<br/>сог<wbr/>ла<wbr/>сен'    }
    ];

    this.questions = [
        { text: "Когда я плáчу, всегда знаю почему." },
        { text: "Мечты — это потеря времени." },
        { text: "Я хотел бы быть не таким застенчивым." },
        { text: "Я часто затрудняюсь определить какие чувства испытываю." },
        { text: "Я часто мечтаю о будущем." },
        { text: "Мне кажется, я так же способен легко заводить друзей, как и другие." },
        { text: "Знать как решать проблемы более важно, чем понимать причины этих решений." },
        { text: "Мне трудно находить правильные слова для моих чувств." },
        { text: "Мне нравится ставить людей в известность о своей позиции по тем или иным вопросам." },
        { text: "У меня бывают физические ощущения, которые непонятны даже докторам." },
        { text: "Мне недостаточно знать, что привело к такому результату, мне необходимо знать, почему и как это происходит." },
        { text: "Я способен с легкостью описать свои чувства." },
        { text: "Я предпочитаю анализировать проблемы, а не просто их опысывать." },
        { text: "Когда я расстроен, не знаю печален ли я, испуган или зол." },
        { text: "Я часто даю волю воображению." },
        { text: "Я провожу много времени в мечтах, когда не занят ничем другим." },
        { text: "Меня часто озадачивают ощущения, появляющиеся в моем теле." },
        { text: "Я редко мечтаю." },
        { text: "Я предпочитаю, чтобы все шло само собой, чем понимать, почему произошло именно так." },
        { text: "У меня бывают чувства, которым я не могу дать вполне точное определение." },
        { text: "Очень важно уметь разбираться в эмоциях." },
        { text: "Мне трудно описать свои чувства по отношению к людям." },
        { text: "Люди мне говорят, чтобы я больше выражал свои чувства." },
        { text: "Следует искать более глубокие объяснения происходящему." },
        { text: "Я не знаю, что происходит у меня внутри." },
        { text: "Я часто не знаю, почему сержусь." }
    ];

    this.scales = {
        A: { score: 0, description: "Алекситимичность" }
    };

    this.interpretation = {
        positives: [2, 3, 4, 7, 8, 10, 14, 16, 17, 18, 19, 20, 22, 23, 25, 26],
        negatives: [1, 5, 6, 9, 11, 12, 13, 15, 21, 24],
        add: {
            positive: function (answer) {
                return answer + 1;
            },
            negative: function (answer) {
                return 5 - answer;
            }
        }
    };

    this.calculate = function () {
        this.scales.A.score = 0;

        var i = 0;
        for (i = 0; i < this.questions.length; i++) {
            var isPositive = this.interpretation.positives.indexOf(i + 1);
            var fn = this.interpretation.add[isPositive ? 'positive' : 'negative'];
            var answer = this.questions[i].answer();
            this.scales.A.score += fn(answer);
        }
    };

    this.correct = function () {};
}
