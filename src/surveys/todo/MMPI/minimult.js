/* jshint maxdepth: 4 */
/* exported MiniMult */

function MiniMult() {
    this.id = "mmpi";
    this.name = "Мини-мульт";

    this.instruction = 'Прочтите следующие утверждения. ' +
        'Эти утверждения описывают чувства, которые человек ОБЫЧНО испытывает, или действия, которые он ОБЫЧНО совершает. ' +
        'Если утверждение Вам не соответствует, нажмите кнопку "Нет". Если утверждение Вам соответствует, нажмите на кнопку "Да".';

    this.answers = [
        { value: '+', text: 'Да',  cls: 'yes'},
        { value: '-', text: 'Нет', cls: 'no' }
    ];

    this.questions = [
        { text: "У Вас хороший аппетит?" },
        { text: "По утрам Вы обычно чувствуете, что выспались и отдохнули?" },
        { text: "В Вашей повседневной жизни масса интересного." },
        { text: "Вы работаете с большим напряжением." },
        { text: "Временами Вам приходят в голову такие нехорошие мысли, что о них лучше не рассказывать." },
        { text: "У Вас очень редко бывает запор." },
        { text: "Иногда Вам очень хотелось навсегда уйти из дома." },
        { text: "Временами у Вас бывают приступы неудержимого смеха или плача." },
        { text: "Временами Вас беспокоят тошнота и позывы на рвоту." },
        { text: "У Вас, такое впечатление, что Вам никто не понимает." },
        { text: "Иногда Вам хочется выругаться." },
        { text: "Каждую неделю Вам снятся кошмары." },
        { text: "Вам труднее сосредоточится, чем большинству людей." },
        { text: "С Вами происходили (или происходят) странные вещи." },
        { text: "Вы достигли бы в жизни гораздо большего, если бы люди небыли настроены против Вас." },
        { text: "В детстве Вы одно время совершали кражи." },
        { text: "Бывало, что по нескольку дней, недель, или целых месяцев, Вы ничем не могли заняться, потому что трудно было заставить себя включиться в работу." },
        { text: "У Вас прерывистый и беспокойный сон." },
        { text: "Когда Вы находитесь среди людей, Вам слышатся странные вещи." },
        { text: "Большинство знающих Вас людей не считают Вас неприятным человеком." },
        { text: "Вам часто приходилось подчиняться кому-нибудь, кто знал меньше Вашего." },
        { text: "Большинство людей довольны своей жизнью более, чем Вы." },
        { text: "Очень многие преувеличивают свои несчастья, чтобы добиться сочувствия и помощи." },
        { text: "Иногда Вы сердитесь." },
        { text: "Вам определенно не хватает уверенности в себе." },
        { text: "Часто у Вас бывает подергивание в мышцах." },
        { text: "У Вас часто бывает чувство, как будто Вы сделали что-то неправильное или нехорошее." },
        { text: "Обычно Вы удовлетворены своей судьбой." },
        { text: "Некоторые так любят командовать, что Вам хочется сделать наперекор, хотя Вы знаете, что они правы." },
        { text: "Вы считаете, что против Вас что-то замышляют." },
        { text: "Большинство людей способно добиваться выгоды не совсем честным путем." },
        { text: "Вас часто беспокоит желудок." },
        { text: "Часто Вы не можете понять, почему на кануне Вы были в плохом настроении и раздражены." },
        { text: "Временами Ваши мысли текли так быстро, что Вы не успевали их высказывать." },
        { text: "Вы считаете, что Ваша семейная жизнь не хуже, чем у большинства Ваших знакомых." },
        { text: "Временами Вы уверены в собственной бесполезности." },
        { text: "В последние годы Ваше самочувствие было в основном хорошим." },
        { text: "У Вас бывали периоды, во время которых Вы что-то делали и потом не могли вспомнить, что именно." },
        { text: "Вы считаете, что Вас незаслуженно наказывали." },
        { text: "Вы никогда не чувствовали себя лучше, чем теперь." },
        { text: "Вам безразлично, что о Вас думают другие." },
        { text: "С памятью у Вас все благополучно." },
        { text: "Вам трудно поддерживать разговор с человеком, с которым Вы только что познакомились." },
        { text: "Большую часть времени Вы чувствуете общую слабость." },
        { text: "У Вас редко болит голова." },
        { text: "Иногда Вам бывало трудно сохранить равновесие при ходьбе." },
        { text: "Не все Ваши знакомые Вам нравятся." },
        { text: "Есть люди, которые пытаются укрась Ваши идеи и мысли." },
        { text: "Вы считаете, что совершали поступки, которые нельзя простить." },
        { text: "Вы считаете, что Вы слишком застенчивы." },
        { text: "Вы почти всегда о чем-нибудь тревожитесь." },
        { text: "Ваши родители часто не одобряли Ваших знакомств." },
        { text: "Иногда Вы немного сплетничаете." },
        { text: "Временами Вы чувствуете, что Вам необыкновенно легко принимать решения." },
        { text: "У Вас бывает сильное сердцебиение, и часто ли Вы задыхаетесь." },
        { text: "Вы вспыльчивы, но отходчивы." },
        { text: "У Вас бывают периоды такого беспокойства, что трудно усидеть на месте." },
        { text: "Ваши родители и другие члены семьи часто придираются к Вам." },
        { text: "Ваша судьба никого особенно не интересует." },
        { text: "Вы не осуждаете человека, который не прочь воспользоваться в своих интересах ошибками другого." },
        { text: "Иногда Вы полны энергии." },
        { text: "За последнее время у Вас ухудшилось зрение." },
        { text: "Часто у Вас звенит или шумит в ушах." },
        { text: "В Вашей жизни были случаи (может быть только один), когда Вы чувствовали что на Вас действуют гипнозом." },
        { text: "У Вас бывают периоды, когда Вы необычно веселы без особой причины." },
        { text: "Даже находясь в обществе, Вы обычно чувствуете себя одиноко." },
        { text: "Вы считаете, что почти каждый может солгать, чтобы избежать неприятностей." },
        { text: "Вы чувствуете острее, чем большинство других людей." },
        { text: "Временами Ваша голова работает как бы медленнее, чем обычно." },
        { text: "Вы часто разочаровываетесь в людях." },
        { text: "Вы злоупотребляете спиртными напитками." }
    ];

    this.scales = {
        "L": { answers: { '+': [], '-': [5, 11, 24, 47, 53] } },
        "F": { answers: { '+': [9, 12, 15, 19, 30, 48, 49, 58, 59], '-': [22, 24, 61] } },
        "K": { answers: { '+': [], '-': [11, 23, 31, 33, 34, 40, 41, 43, 56, 61, 65, 67, 69, 70] } },
        "1": { answers: { '+': [9, 18, 26, 32, 44, 46, 55, 62, 63], '-': [1, 2, 6, 37, 45] } },
        "2": { answers: { '+': [4, 9, 17, 18, 22, 25, 36, 44], '-': [1, 3, 6, 11, 28, 37, 40, 42, 60, 61, 65] } },
        "3": { answers: { '+': [1, 2, 3, 9, 18, 26, 31, 33, 35, 44, 46, 55, 57, 62], '-': [11, 23, 28, 29, 37, 40, 41, 43, 45, 50, 56] } },
        "4": { answers: { '+': [7, 10, 13, 14, 15, 16, 22, 27, 52, 58, 71], '-': [3, 28, 34, 35, 41, 43, 50, 65] } },
        "6": { answers: { '+': [5, 8, 10, 15, 30, 39, 63, 64, 66, 68], '-': [28, 29, 31, 67] } },
        "7": { answers: { '+': [5, 8, 13, 17, 22, 25, 27, 36, 44, 51, 57, 66, 68], '-': [2, 3, 42] } },
        "8": { answers: { '+': [5, 7, 8, 10, 13, 14, 15, 16, 17, 26, 38, 39, 46, 57, 63, 64, 66], '-': [3, 42] } },
        "9": { answers: { '+': [4, 7, 8, 21, 29, 34, 38, 39, 54, 57, 60], '-': [43] } }
    };

    this.correction = {
        scales: ["1", "4", "9", "7", "8"],
        matrix: [
            [0, 0, 0,  0,  0], // K = 0
            [1, 1, 0,  1,  1], // K = 1
            [1, 1, 0,  2,  2], // K = 2
            [2, 2, 1,  3,  3], // K = 3
            [2, 2, 1,  4,  4], // K = 4
            [2, 2, 1,  5,  5], // K = 5
            [3, 2, 1,  6,  6], // K = 6
            [4, 3, 2,  7,  7], // K = 7
            [4, 3, 2,  8,  8], // K = 8
            [5, 4, 2,  9,  9], // K = 9
            [5, 4, 2, 10, 10], // K = 10
            [6, 4, 2, 11, 11], // K = 11
            [6, 5, 2, 12, 12], // K = 12
            [7, 6, 3, 13, 13], // K = 13
            [7, 6, 3, 14, 14], // K = 14
            [8, 6, 3, 15, 15], // K = 15
            [8, 6, 3, 16, 16]  // K = 16
        ]
    };

    this.calculate = function () {
        var key, scale, answer, interpret, i, qNo, question;
        for (key in this.scales) {
            if (!this.scales.hasOwnProperty(key)) {
                continue;
            }

            scale = this.scales[key];
            scale.score = 0;
            for (answer in scale.answers) {
                if (!scale.answers.hasOwnProperty(answer)) {
                    continue;
                }

                interpret = scale.answers[answer];

                for (i = 0; i < interpret.length; i++) {
                    qNo = interpret[i] - 1;
                    question = this.questions[qNo];

                    if (question.answer() === answer) {
                        scale.score += 1;
                    }
                }
            }
        }
    };

    this.t = {
        "1": [26, 30, 34, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68, 72, 75, 78, 82, 86, 88, 94, 96, 98, 104, 106],
        "2": [26, 28, 34, 36, 38, 42, 45, 48, 52, 55, 58, 62, 68, 72, 78, 82, 86, 88, 94, 96, 98],
        "3": ['x', 'x', 22, 25, 28, 34, 36, 38, 42, 45, 52, 55, 58, 62, 65, 72, 75, 78, 82, 86, 88, 94, 96, 98, 104, 106, 110],
        "4": ['x', 'x', 'x', 'x', 22, 25, 30, 36, 38, 45, 48, 55, 58, 65, 72, 75, 78, 74, 76, 94, 98, 104, 108, 110],
        "6": [28, 34, 38, 45, 48, 55, 62, 65, 72, 78, 86, 94, 96, 104, 108],
        "7": ['x', 'x', 'x', 'x', 'x', 'x', 22, 25, 28, 34, 36, 38, 42, 45, 48, 55, 58, 62, 65, 72, 75, 82, 86, 94, 95, 98, 104, 108],
        "8": ['x', 'x', 'x', 'x', 'x', 22, 25, 28, 34, 36, 38, 42, 45, 48, 52, 55, 58, 62, 68, 72, 75, 78, 82, 86, 88, 94, 96, 98, 104, 108, 110],
        "9": ['x', 22, 25, 28, 36, 42, 45, 52, 58, 66, 68, 75, 82, 86, 88, 96, 98, 110],
        'L': [35, 45, 55, 65, 72, 78],
        "F": [34, 38, 45, 48, 55, 58, 65, 72, 75, 78, 86, 88, 96],
        "K": [24, 26, 30, 34, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68, 72]
    };

    this.correct = function () {
        var i, s, correction, key, k = this.scales.K.score, t = this.t;
        k = Math.min(Math.max(0, k), 16); // 0 <= k <= 16
        correction = this.correction.matrix[k];
        for (i = 0; i < correction.length; i++) {
            key = this.correction.scales[i];
            this.scales[key].score += correction[i];
        }

        for (key in t) {
            if (t.hasOwnProperty(key)) {
                s = this.scales[key];
                s.tscore = t[key][s.score];
            }
        }
    };
}

(this.surveys = this.surveys || []).push(new MiniMult());