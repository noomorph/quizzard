/* exported Factor5 */

function Factor5() {
    this.id = 'factor5';
    this.name = 'Пятифакторный опросник личности';

    this.instruction = 'Прочтите следующие утверждения. ' +
        'На каждое утверждение нужно дать один из пяти ответов: ' +
        '(-2) совершенно не согласен, (-1) скорее не согласен, ' +
        '(0) ни то, ни другое, (1) скорее согласен, ' +
        '(2) совершенно согласен.';

    this.answers = [
        { value: -2, cls: 'a a0', text: '-2' },
        { value: -1, cls: 'a a1', text: '-1' },
        { value: 0, cls: 'a a2', text: '0' },
        { value: 1, cls: 'a a3', text: '1' },
        { value: 2, cls: 'a a4', text: '2' }
    ];

    this.questions = [
        { text:
            'Мне нравиться заниматься физкультурой.<br/>' +
            'Я не люблю физические нагрузки.' },
        { text:
            'Люди считают меня отзывчивым и доброжелательным человеком.<br/>' +
            'Некоторые люди считают меня холодным и черствым.' },
        { text:
            'Я во всем ценю чистоту и порядок.<br/>' +
            'Иногда я позволяю себе быть неряшливым.' },
        { text:
            'Меня часто беспокоит мысль, что что-нибудь может случиться.<br/>' +
            '«Мелочи жизни» меня не тревожат.' },
        { text:
            'Все новое вызывает у меня интерес.<br/>' +
            'Часто новое вызывает у меня раздражение.' },
        { text:
            'Если я ничем не занят, то это меня беспокоит.<br/>' +
            'Я человек спокойный и не люблю суетиться.' },
        { text:
            'Я стараюсь проявлять дружелюбие ко всем людям.<br/>' +
            'Я не всегда и не со всеми дружелюбный человек.' },
        { text:
            'Моя комната всегда аккуратно прибрана.<br/>' +
            'Я не очень стараюсь следить за чистотой и порядком.' },
        { text:
            'Иногда я расстраиваюсь из-за пустяков.<br/>' +
            'Я не обращаю внимания на мелкие проблемы.' },
        { text:
            'Мне нравятся неожиданности.<br/>' +
            'Я люблю предсказуемость событий.' },
        { text:
            'Я не могу долго оставаться в неподвижности.<br/>' +
            'Мне не нравится быстрый стиль жизни.' },
        { text:
            'Я тактичен по отношения к другим людям.<br/>' +
            'Иногда в шутку я задеваю самолюбие других.' },
        { text:
            'Я методичен и пунктуален во всем.<br/>' +
            'Я не очень обязательный человек.' },
        { text:
            'Мои чувства легко уязвимы и ранимы.<br/>' +
            'Я редко тревожусь и редко чего-либо боюсь.' },
        { text:
            'Мне не интересно, когда ответ ясен заранее.<br/>' +
            'Я не интересуюсь вещами, которые мне не понятны.' },
        { text:
            'Я люблю, чтобы другие быстро выполняли мои распоряжения.<br/>' +
            'Я не спеша выполняю чужие распоряжения.' },
        { text:
            'Я уступчивый и склонный к компромиссам человек.<br/>' +
            'Я люблю поспорить с окружающими.' },
        { text:
            'Я проявляю настойчивость, решая трудную задачу.<br/>' +
            'Я не очень настойчивый человек.' },
        { text:
            'В трудных ситуациях я весь сжимаюсь от напряжения.<br/>' +
            'Я могу расслабиться в любой ситуации.' },
        { text:
            'У меня очень живое воображение.<br/>' +
            'Я всегда предпочитаю реально смотреть на мир.' },
        { text:
            'Мне часто приходится быть лидером, проявлять инициативу.<br/>' +
            'Я скорее подчиненный, чем лидер.' },
        { text:
            'Я всегда готов оказать помощь и разделить чужие трудности.<br/>' +
            'Каждый должен уметь позаботиться о себе.' },
        { text:
            'Я очень старательный во всех делах человек.<br/>' +
            'Я не очень усердствую на работе.' },
        { text:
            'У меня часто выступает холодный пот и дрожат руки.<br/>' +
            'Я редко испытывал напряжение, сопровождаемое дрожью в теле.' },
        { text:
            'Мне нравится мечтать.<br/>' +
            'Я редко увлекаюсь фантазиями.' },
        { text:
            'Часто случается, что я руковожу, отдаю распоряжения другим людям.<br/>' +
            'Я предпочитаю, чтобы кто-то другой брал в свои руки руководство.' },
        { text:
            'Я предпочитаю сотрудничать с другими, чем соперничать.<br/>' +
            'Без соперничества общество не могло бы развиваться.' },
        { text:
            'Я серьезно и прилежно отношусь к работе.<br/>' +
            'Я стараюсь не брать дополнительные обязанности на работе.' },
        { text:
            'В необычной обстановке я часто нервничаю.<br/>' +
            'Я легко привыкаю к новой обстановке.' },
        { text:
            'Иногда я погружаюсь в глубокие размышления.<br/>' +
            'Я не люблю тратить свое время на размышления.' },
        { text:
            'Мне нравится общаться с незнакомыми людьми.<br/>' +
            'Я не очень общительный человек.' },
        { text:
            'Большинство людей добры от природы.<br/>' +
            'Я думаю, что жизнь делает некоторых людей злыми.' },
        { text:
            'Люди часто доверяют мне ответственные дела.<br/>' +
            'Некоторые считают меня безответственным.' },
        { text:
            'Иногда я чувствую себя одиноко, тоскливо и все валится из рук.<br/>' +
            'Часто, что-либо делая, я так увлекаюсь, что забываю обо всем.' },
        { text:
            'Я хорошо знаю, что такое красота и элегантность.<br/>' +
            'Мое представление о красоте такое же, как и у других.' },
        { text:
            'Мне нравится приобретать новых друзей и знакомых.<br/>' +
            'Я предпочитаю иметь только несколько надежных друзей.' },
        { text:
            'Люди, с которыми я общаюсь, обычно мне нравятся.<br/>' +
            'Есть такие люди, которых я не люблю.' },
        { text:
            'Я требователен и строг в работе.<br/>' +
            'Иногда я пренебрегаю своими обязанностями.' },
        { text:
            'Когда я сильно расстроен, у меня тяжело на душе.<br/>' +
            'У меня очень редко бывает мрачное настроение.' },
        { text:
            'Музыка способна так захватить меня, что я теряю чувство времени.<br/>' +
            'Драматическое искусство и балет кажутся мне скучными.' },
        { text:
            'Я люблю находиться в больших и веселых компаниях.<br/>' +
            'Я предпочитаю уединение.' },
        { text:
            'Большинство людей честные, и им можно доверять.<br/>' +
            'Иногда я отношусь подозрительно к другим людям.' },
        { text:
            'Я обычно работаю добросовестно.<br/>' +
            'Люди часто находят в моей работе ошибки.' },
        { text:
            'Я легко впадаю в депрессию.<br/>' +
            'Мне невозможно испортить настроение.' },
        { text:
            'Настоящее произведение искусства вызывает у меня восхищение.<br/>' +
            'Я редко восхищаюсь совершенством настоящего произведения искусства.' },
        { text:
            '«Болея» на спортивных соревнованиях, я забываю обо всем.<br/>' +
            'Я не понимаю, почему люди занимаются опасными видами спорта.' },
        { text:
            'Я стараюсь проявлять чуткость, когда имею дело с людьми.<br/>' +
            'Иногда мне нет дела до интересов других людей.' },
        { text:
            'Я редко делаю необдуманно то, что хочу сделать.<br/>' +
            'Я предпочитаю принимать решения быстро.' },
        { text:
            'У меня много слабостей и недостатков.<br/>' +
            'У меня высокая самооценка.' },
        { text:
            'Я хорошо понимаю свое душевное состояние.<br/>' +
            'Мне кажется, что другие люди менее чувствительны, чем я.' },
        { text:
            'Я часто игнорирую сигналы, предупреждающие об опасности.<br/>' +
            'Я предпочитаю избегать опасных ситуаций.' },
        { text:
            'Радость других я разделяю как собственную.<br/>' +
            'Я не всегда разделяю чувства других людей.' },
        { text:
            'Я обычно контролирую свои чувства и желания.<br/>' +
            'Мне трудно сдерживать свои желания.' },
        { text:
            'Если я терплю неудачу, то обычно обвиняю себя.<br/>' +
            'Мне часто «везет», и обстоятельства редко бывают против меня.' },
        { text:
            'Я верю, что чувства делают мою жизнь содержательнее.<br/>' +
            'Я редко обращаю внимание на чужие переживания.' },
        { text:
            'Мне нравятся карнавальные шествия и демонстрации.<br/>' +
            'Мне не нравится находиться в многолюдных местах.' },
        { text:
            'Я стараюсь поставить себя на место другого человека, чтобы его понять.<br/>' +
            'Я не стремлюсь понять все нюансы переживаний других людей.' },
        { text:
            'В магазине я обычно долго выбираю то, что надумал купить.<br/>' +
            'Иногда я покупаю вещи импульсивно.' },
        { text:
            'Иногда я чувствую себя жалким человеком.<br/>' +
            'Обычно я чувствую себя нужным человеком.' },
        { text:
            'Я легко «вживаюсь» в переживания вымышленного героя.<br/>' +
            'Приключения киногероя не могут изменить мое душевное состояние.' },
        { text:
            'Я чувствую себя счастливым, когда на меня обращают внимание.<br/>' +
            'Я скромный человек и стараюсь не выделяться среди людей.' },
        { text:
            'В каждом человеке есть нечто, за что его можно уважать.<br/>' +
            'Я еще не встречал человека, которого можно было бы уважать.' },
        { text:
            'Обычно я хорошо думаю, прежде чем действую.<br/>' +
            'Я не люблю продумывать заранее результаты своих поступков.' },
        { text:
            'Часто у меня бывают взлеты и падения настроения.<br/>' +
            'Обычно у меня ровное настроение.' },
        { text:
            'Иногда я чувствую себя фокусником, подшучивающим над людьми.<br/>' +
            'Люди часто называют меня скучным, но надежным человеком.' },
        { text:
            'Я привлекателен для лиц противоположного иола.<br/>' +
            'Некоторые считают меня обычным и неинтересным человеком.' },
        { text:
            'Я всегда стараюсь быть добрым и внимательным с каждым человеком.<br/>' +
            'Некоторые люди думают, что я самонадеянный и эгоистичный.' },
        { text:
            'Перед путешествием я намечаю точный план.<br/>' +
            'Я не могу понять, зачем люди строят такие детальные планы.' },
        { text:
            'Мое настроение легко меняется на противоположное.<br/>' +
            'Я всегда спокоен и уравновешен.' },
        { text:
            'Я думаю, что жизнь – это азартная игра.<br/>' +
            'Жизнь – это опыт, передаваемый последующим поколениям.' },
        { text:
            'Мне нравится выглядеть вызывающе.<br/>' +
            'В обществе я обычно не выделяюсь поведением и модной одеждой.' },
        { text:
            'Некоторые говорят, что я снисходителен к окружающим.<br/>' +
            'Говорят, что я часто хвастаюсь своими успехами.' },
        { text:
            'Я точно и методично выполняю свою работу.<br/>' +
            'Я предпочитаю «плыть по течению», доверяя своей интуиции.' },
        { text:
            'Иногда я бываю настолько взволнован, что даже плачу.<br/>' +
            'Меня трудно вывести из себя.' },
        { text:
            'Иногда я чувствую, что могу открыть в себе нечто новое.<br/>' +
            'Я не хотел бы ничего в себе менять.' }
    ];

    this.scales = {
        I: { score: 0, description: 'Экстраверсия – интроверсия' },
        II: { score: 0, description: 'Привязанность - обособленность' },
        III: { score: 0, description: 'Самоконтроль - импульсивность' },
        IV: { score: 0, description: 'Эмоциональная устойчивость - эмоциональная неустойчивость' },
        V: { score: 0, description: 'Экспрессивность - практичность' }
    };

    var interpretation = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        0: 'V'
    };

    this.cleanScores = function () {
        var key;
        for (key in this.scales) {
            this.scales[key].score = 0;
        }
    };

    this.calculate = function () {
        var i, key, answer;

        this.cleanScores();
        for (i = 0; i < this.questions.length; i++) {
            key = interpretation[(i + 1) % 5];
            answer = this.questions[i].answer();
            this.scales[key].score += 3 - answer;
        }
    };

    this.emulate = function (scales, priorityScale) {
        // expect scales to be { I: 10, II: 0, III: 30, IV: 40, V: 50 }
        var i, k, key, answer, actual, expected, deviation, emulated, minDeviation, bestAnswers;
        minDeviation = 999999;

        var filterDbg = function (item) {
            return item[1] === item[2];
        };

        var mapperDbg = function (q, i) {
            var index = (i + 1) < 10 ? '0' + (i + 1) : '' + (i + 1);
            return [index, priorityScale, interpretation[(i + 1) % 5], q.answer()];
        };

        var mapperFill = function(q) {
            return q.answer();
        };

        for (k = 0; k < 100000; k++) {
            this.cleanScores();
            deviation = 0;

            for (i = 0; i < this.questions.length; i++) {
                answer = Math.floor(Math.random() * this.answers.length);
                answer = this.answers[answer];
                this.questions[i].answer(answer.value); // answer randomly
            }

            this.calculate();

            emulated = {};
            for (key in this.scales) {
                actual = this.scales[key].score;
                expected = scales[key];
                if (key === priorityScale) {
                    deviation += Math.pow(actual - expected, 2);
                }
                emulated[key] = actual;
            }

            if (deviation < minDeviation) {
                minDeviation = deviation;
                bestAnswers = {
                    answers: this.questions.map(mapperDbg).filter(filterDbg),
                    fill: this.questions.map(mapperFill),
                    emulated: emulated
                };
            }
        }

        return bestAnswers;
    };

    this.correct = function () {};
}

(this.surveys = this.surveys || []).push(new Factor5());
