import { linebreak } from 'util/softbreak';

export default {
    'Amon': {
        'name': 'Я-структурный тест Аммона',
        'description': 'Прочтите следующие утверждения. ' +
            'Эти утверждения описывают чувства, которые человек ' +
            'ОБЫЧНО испытывает, или действия, которые он ОБЫЧНО совершает. ' +
            'Если утверждение Вам не соответствует, нажмите кнопку "Нет". ' +
            'Если утверждение Вам соответствует, нажмите на кнопку "Да".',
        'questions': [
            { text: 'Если я начал(а) какое-то дело, я заканчиваю его, ' +
                'независимо от того, стоит что-нибудь на пути или нет' },
            { text: 'Если меня обидели, то я пытаюсь отомстить' },
            { text: 'Чаще всего я чувствую себя одиноким (одинокой), даже среди других людей' },
            { text: 'Когда я рассержен(а), я срываю свой гнев на других' },
            { text: 'У меня отличное чувство времени' },
            { text: 'Как правило я работаю с большим напряжением' },
            { text: 'Если кто-нибудь заставляет меня ждать, я не могу думать ни о чем другом' },
            { text: 'Я легко схожусь с людьми' },
            { text: 'То, что я действительно чувствую и думаю, в сущности, никого не интересует' },
            { text: 'Меня часто упрекают в том, что я нечувствительный человек' },
            { text: 'Мне приятно, когда другие люди на меня смотрят' },
            { text: 'Часто я ловлю себя на том, что мои мысли где-то в другом месте' },
            { text: 'Как правило, утром я просыпаюсь бодрым (бодрой) и отдохнувшим (отдохнувшей)' },
            { text: 'Я хочу только одного, чтобы другие оставили меня в покое' },
            { text: 'Секс создает у меня счастливое настроение на целый день' },
            { text: 'Я почти совсем не вижу сновидений' },
            { text: 'Я не могу прервать скучный для меня разговор' },
            { text: 'Я с удовольствием приглашаю гостей к себе домой' },
            { text: 'Тем, о чем я думаю в действительности, я не могу поделиться с другими' },
            { text: 'Ко мне часто пристают с сексуальными предложениями' },
            { text: 'Чаще я радуюсь, чем сержусь' },
            { text: 'Что касается сексуальности, то я имею свои собственные фантазии' },
            { text: 'Я охотно помогаю другим, но не позволяю себя использовать' },
            { text: 'То, что я делаю, часто не находит никакого признания' },
            { text: 'Когда я испытываю злость, это вызывает у меня чувство вины' },
            { text: 'Меня привлекают новые задачи' },
            { text: 'Когда я уезжаю на несколько дней, это едва ли кого-нибудь интересует' },
            { text: 'Трудности сразу же выбивают меня из колеи' },
            { text: 'Я придаю большое значение тому, чтобы все имело свой порядок' },
            { text: 'Даже несколько минут сна, могут сделать меня отдохнувшем (отдохнувшей)' },
            { text: 'Я могу показывать другим только законченную работу' },
            { text: 'Мне неприятно оставаться с кем-либо наедине' },
            { text: 'Я охотно придумываю себе эротические ситуации, которые ' +
                'бы пережить со своей (своим) партнершей (партнером)' },
            { text: 'Я много жду от жизни' },
            { text: 'Зачастую мой интерес пересиливает страх' },
            { text: 'В любой компании я остаюсь самим (сама) собой' },
            { text: 'Мои проблемы и заботы — это только мои заботы' },
            { text: 'Самое прекрасное в жизни — это сон' },
            { text: 'Жизнь — это сплошное страдание' },
            { text: 'Я с удовольствием провожу со своей (своим) сексуальной ' +
                '(сексуальным) партнершей (партнером) всю ночь' },
            { text: 'Часто я ощущаю себя недостаточно включенным (включенной) в происходящее' },
            { text: 'В своей повседневной жизни я чаще испытываю радость, чем досаду' },
            { text: 'В эротическом настроении мне не нужно выдумывать темы' +
                'для разговора с партнершей (партнером)' },
            { text: 'Я охотно рассказываю другим о своей работе' },
            { text: 'Часто у меня бывают дни, когда я часами занят(а) своими мыслями' },
            { text: 'Я редко нахожу кого-нибудь сексуально привлекательной (привлекательным)' },
            { text: 'Я ощущаю, что моя тревожность очень стесняет меня в жизни' },
            { text: 'Мне нравится находить то, что доставляет сексуальное' +
                'удовольствие моей (моему) партнерше (партнеру)' },
            { text: 'Я постоянно что-нибудь забываю' },
            { text: 'Мой страх помогает мне ощутить, что я хочу и чего я не хочу' },
            { text: 'У меня много энергии' },
            { text: 'Мне часто снится, что на меня нападают' },
            { text: 'Чаще всего меня недооценивают в моих способностях' },
            { text: 'Часто я не осмеливаюсь выйти один (одна) на улицу' },
            { text: 'Во время работы нет места чувствам' },
            { text: 'Я благодарен (благодарна) всякий раз, когда мне' +
                'точно говорят, что я должен (должна) сделать' },
            { text: 'Я часто руководствуюсь мнением других людей' },
            { text: 'Для меня хорошее настроение заразительно' },
            { text: 'Часто страх «парализует» меня' },
            { text: 'Когда моей (моему) партнерше (партнеру) хочется' +
                'спать со мной, я чувствую себя стесненны (стесненной)' },
            { text: 'В большинстве случаев я откладываю принятие решений «на потом»' },
            { text: 'Мои сексуальные фантазии почти всегда крутятся вокруг' +
                'того, насколько хорошо ко мне относится партнерша (партнер)' },
            { text: 'Я боюсь, что я мог (могла) бы причинить кому-нибудь вред' },
            { text: 'Никто не замечает — есть я или нет' },
            { text: 'Я испытываю внутренний дискомфорт,' +
                'если у меня долгое время нет сексуальных отношений' },
            { text: 'В сущности, моя жизнь — сплошное ожидание' },
            { text: 'Часто со мной случается так, что я влюбляюсь' +
                'в кого-нибудь, кто уже имеет партнершу (партнера)' },
            { text: 'Ответственность, которую я несу, другие часто не замечают' },
            { text: 'В большинство угрожающих ситуаций, которые были' +
                'в моей жизни, я был(а) втянут(а) помимо своей воли' },
            { text: 'Иногда мне хочется грубого секса' },
            { text: 'Часто я чувствую свою незащищенность перед жизнью' },
            { text: 'Если на меня «нападают», я «проглатываю» свой гнев' },
            { text: 'Благодаря своим способностям, я всегда легко устанавливаю контакты' },
            { text: 'Я радуюсь каждому новому знакомству, которое завожу' },
            { text: 'В высшей степени возбуждающим я нахожу секс с незнакомыми' },
            { text: 'Иногда у меня возникают мысли о самоубийстве' },
            { text: 'Часто мои мысли витают в облаках' },
            { text: 'Я могу полностью сексуально отдаваться' },
            { text: 'Обо мне часто забывают' },
            { text: 'Я не люблю игр' },
            { text: 'В моих отношениях с партнершей (партнером)' +
                'сексуальность не играет большой роли' },
            { text: 'В группе я теряюсь' },
            { text: 'Я не стесняюсь показывать сексуальное желание' +
                'своей (своему) партнерше (партнеру)' },
            { text: 'Я все время позволяю все взваливать на себя' },
            { text: 'Я с удовольствием выбираю подарки для своих друзей' },
            { text: 'На меня легко можно произвести впечатление' },
            { text: 'Я замечаю, что чаще всего рассказываю о плохом, а о хорошем забываю' },
            { text: 'Мне неприятно, когда кто-нибудь говорит о своих чувствах' },
            { text: 'Я хорошо распределяю свое время' },
            { text: 'Я сплю необходимое для меня время' },
            { text: 'Если мне необходимо выступать публично, я часто теряю голос' },
            { text: 'Я с удовольствием подшучиваю над другими' },
            { text: 'Мне доставляет удовольствие возбуждать сексуальный интерес' +
                'у женщин (мужчин), даже если я от них в сущности ничего не хочу' },
            { text: 'Я уже пережил(а) многие кризисы, которые побудили меня' +
                'к дальнейшему развитию' },
            { text: 'В большинстве ситуаций я могу оставаться самим (сама) собой' },
            { text: 'Я много смеюсь' },
            { text: 'Когда я прихожу в ярость, мне стоит больших усилий держать себя в руках' },
            { text: 'У меня богатая чувственная жизнь' },
            { text: 'Я могу полностью доверится дружескому расположению других' },
            { text: 'У меня часто бывает чувство непричастности' },
            { text: 'То, что я делаю, не так уж и важно' },
            { text: 'Досаду и раздражение я могу не показывать другим' },
            { text: 'Когда я говорю, меня часто перебивают' },
            { text: 'Часто я рисую себе, как должны были бы быть' +
                'плохи дела у тех, кто был несправедлив ко мне' },
            { text: 'Мне нравиться много шутить и смеяться с моей (моим)' +
                'партнершей (партнером) во время секса' },
            { text: 'Я получаю удовольствие, выбирая утром одежду на день' },
            { text: 'Я всегда могу найти время для важных дел' },
            { text: 'Часто случается так, что я забываю о чем-то важном' },
            { text: 'Когда мой начальник меня критикует, я начинаю потеть' },
            { text: 'Когда мне скучно, я ищу сексуальных приключений' },
            { text: 'Моя повседневная жизнь не имеет ни подъемов, ни спадов' },
            { text: 'Трудности подстегивают меня' },
            { text: 'Большинство людей не имеют никакого представления о том,' +
                'насколько важны для меня вещи, которыми я интересуюсь' },
            { text: 'По сути, секс для меня не особенно интересен' },
            { text: 'Я с удовольствием знакомлю своих новых коллег с моей работой' },
            { text: 'Часто я настраиваю других против себя' },
            { text: 'Даже от незначительной критики я теряю уверенность' },
            { text: 'Иногда меня мучают мысли причинить телесную боль' +
                'людям, которые меня страшно раздражают' },
            { text: 'Часто мои фантазии преследуют меня' },
            { text: 'Мне неоходимо снова и снова обдумывать решения,' +
                'потому что меня одолевают сомнения' },
            { text: 'До настоящего времени я никогда не испытывал(а)' +
                'полного удовлетворения от сексуальных отношений' },
            { text: 'Я намного более чувствителен (чувствительна) к боли, чем другие' },
            { text: 'Я часто чувствую себя слишком открытым (открытой)' },
            { text: 'То, что я делаю, мог бы делать почти каждый' },
            { text: 'Чувства, пережитые в детстве преследуют меня до сих пор' },
            { text: 'Неизвестное манит меня' },
            { text: 'Даже когда мною владеет страх, я полностью' +
                'могу отдавать себе отчет в том, что происходит' },
            { text: 'Часто я впадаю в такую панику, что не могу' +
                'осуществлять даже важные дела' },
            { text: 'Часто мне хочется иметь другую (другого) партнершу (партнера)' +
                'для того, чтобы преодолеть свою сексуальную скованность' },
            { text: 'Я могу по-настоящему увлечься делом' },
            { text: 'Я откладываю все в «долгий ящик»' },
            { text: 'Я могу страшно волноваться из-за пустяков' },
            { text: 'В своих сексуальных отношениях я ощущал(а),' +
                'что со временем они становятся лучше и интенсивнее' },
            { text: 'Я часто чувствую себя лишним (лишней)' },
            { text: 'Не следует иметь сексуальных отношений слишком часто' },
            { text: 'Когда у меня трудности, я быстро нахожу людей, которые мне помогают' },
            { text: 'Я не позволяю другим людям легко вносить сумятицу в мою жизнь' },
            { text: 'Я могу хорошо сосредоточится' },
            { text: 'Я охотно соблазняю мою (моего) партнершу (партнера)' },
            { text: 'Если я допустил(а) ошибку, я легко могу забыть о ней' },
            { text: 'Я радуюсь, когда ко мне неожиданно приходят гости' },
            { text: 'Почти все женщины (мужчины) хотят только одного' },
            { text: 'Даже в состоянии страха я могу ясно мыслить' },
            { text: 'Я давно не имел(а) сексуальных отношений' +
                'и не испытывал(а) в них потребности' },
            { text: 'Если меня кто-то обижает, то я плачу ему тем же' },
            { text: 'Если кто-то пытается соперничать со мной, то я быстро сдаюсь' },
            { text: 'Я могу хорошо сам(а) себя занять' },
            { text: 'Дя того, чтобы избежать ненужных волнений, я уклоняюсь от споров' },
            { text: 'Когда я нахожусь в состоянии ярости, я легко могу' +
                'поранить себя или со мной может произойти несчастный случай' },
            { text: 'Часто я не могу решиться что-нибудь предпринять' },
            { text: 'После сексуального контакта я целый день' +
                'особенно работоспособен (работоспособна)' },
            { text: 'В большинстве случаев меня удовлетворяет эротика,' +
                'секс для меня не так уж и важен' },
            { text: 'В выходные дни я чувствую себя особенно плохо' },
            { text: 'Я не хочу показывать другим свои чувства' },
            { text: 'Люди часто придираются ко мне, хотя я не делаю им ничего плохого' },
            { text: 'С людьми мне трудно вступить в разговор или найти нужные слова' },
            { text: 'Если мне нравиться кто-то, я заговариваю с ней' +
                '(ним), чтобы поближе познакомиться' },
            { text: 'Я считаю, что всегда держать под контролем свои чувства' +
                '— это цель, достойная того, чтобы к ней стремиться' },
            { text: 'Во время отпуска и в праздники я часто имею сексуальные приключения' },
            { text: 'Я осмеливаюсь высказать свое мнение перед группой' },
            { text: 'Чаще всего я не выплескиваю свой генв' },
            { text: 'Никто не знает, как часто меня обижают' },
            { text: 'Когда на меня кто-то «косо смотрит»,' +
                'я сразу начинаю испытывать беспокойство' },
            { text: 'Когда кто-нибудь грустит, мне тоже очень скоро становиться грустно' },
            { text: 'В моих фантазиях секс красивее, чем в действительности' },
            { text: 'Мне трудно решиться на что-либо, потому что я боюсь,' +
                'что другие могут критиковать меня за это решение' },
            { text: 'Меня радуют мои фантазии' },
            { text: 'Я не знаю почему, но иногда мне хотелось бы разбить все вдребезги' },
            { text: 'При сексуальных отношениях я часто мысленно где-то далеко' },
            { text: 'Мне случалось часто бывать в рискованных ситуациях' },
            { text: 'Если меня что-то тревожит, я делюсь этим с другими' },
            { text: 'Я часто думаю о прошлом' },
            { text: 'Я сохранял(а) дружеские отношения даже в период кризисов' },
            { text: 'Мне скучно почти на всех праздниках и вечеринках' },
            { text: 'Когда я сержусь, я легко теряю контроль над собой' +
                'и кричу на свою (своего) партнершу (партнера)' },
            { text: 'Я не позволяю легко сбить себя с толку' },
            { text: 'Иногда я заглушаю свой страх алкоголем или таблетками' },
            { text: 'Я робкий человек' },
            { text: 'Я очень боюсь своего будущего' },
            { text: 'Больше всего я возбуждаюсь, когда моя (мой) партнерша (партнер)' +
                'не хочет вступать со мной в сексуальные отношения' },
            { text: 'Бывают дни, когда я постоянно что-нибудь разбиваю или' +
                'обо что-нибудь ушибаюсь' },
            { text: 'У меня редко возникают сексуальные фантазии' },
            { text: 'У меня много желаний и я прикладываю много сил' +
                'для того, чтобы они осуществились' },
            { text: 'Я всегда радуюсь, когда могу познакомиться с новым человеком' },
            { text: 'Лично мне сказки ни о чем важном не говорят' },
            { text: 'Чаще всего я имею сексуальных партнеров (партнерш),' +
                'у которых я не единственная (единственный)' },
            { text: 'Если кто-то расстался со мной, я стремлюсь к тому,' +
                'чтобы мне о ней (нем) ничто не напоминало' },
            { text: 'В общении с людьми я часто бываю в замешательстве' },
            { text: 'Я охотно рассказываю о себе и своих переживаниях' },
            { text: 'Я часто предаюсь раздумьям' },
            { text: 'К выполнению трудных задач я готовлюсь основательно и своевременно' },
            { text: 'Обычно я знаю причины своего плохого самочувствия' },
            { text: 'Если я намечаю что-нибудь хорошее для себя лично, я часто это не реализую' },
            { text: 'Непосредственный секс для меня важнее, чем просто' +
                'общение с партнершей (партнером)' },
            { text: 'Часто в группе я беру на себя инициативу' },
            { text: 'Наиболее привлекательными для меня являются люди,' +
                'которые всегда остаются невозмутимыми и ведут себя уверенно' },
            { text: 'Часто мои фантазии крутятся вокруг таких' +
                'сексуальных действий, о которых не принято говорить' },
            { text: 'Я радуюсь всему тому, что умею' },
            { text: 'Когда другие неожиданно застают меня' +
                'за каким-нибудь занятием, я легко пугаюсь' },
            { text: 'Рассудком достигают большего, чем чувствами' },
            { text: 'Если меня что-нибудь интересует, меня ничто не может отвлечь' },
            { text: 'Я редко бываю полностью доволен (довольна) абсолютно всем' },
            { text: 'Случается, что я по-настоящему кого-нибудь «достаю»' },
            { text: 'Если люди, которые важны для меня, долго разговаривают с другими,' +
                'я, в полном смысле слова, прихожу в бешенство' },
            { text: 'В сущности, секс вызывает у меня отвращение' },
            { text: 'Когда другие смеются, я часто не могу смеяться вместе с ними' },
            { text: 'Меня интересуют прежде всего те виды спорта, которые связаны с риском' },
            { text: 'Я невысокого мнения о психологии' },
            { text: 'Я часто не понимаю, что происходит' },
            { text: 'Я очень любопытен (любопытна)' },
            { text: 'Фантазирование отвлекает меня от работы' },
            { text: 'Сексуальные отношения я переживаю, как мучительную обязанность' },
            { text: 'Я добровольно берусь за выполнение даже таких' +
                'важных задач, которые вызывают у меня страх' },
            { text: 'Вероятно, я никогда не найду подходящую (подходящего) партнершу (партнера)' },
            { text: 'Я часто скучаю' },
            { text: 'Существую я или нет, это не так уж и важно' },
            { text: 'Давать ответы на вопросы, связанные с сексуальными отношениями,' +
                'доставило мне удовольствие' },
            { text: 'Часто я чувствую себя раздавленным (раздавленной) требованиями' },
            { text: 'Часто мне удается непроизвольно побуждать других брать' +
                'на себя те задачи, которые мне неприятны' },
            { text: '«Предстартовое» волнение способно меня окрылить' },
        ].reduce((acc, { text }, index) => {
            acc[index + 1] = linebreak(text + '.');
            return acc;
        }, {}),
        'answers': {
            '+': 'Да',
            '-': 'Нет',
        },
        'scales': {
            A1: 'Конструктивная агрессия',
            A2: 'Деструктивная агрессия',
            A3: 'Дефицитарная агрессия',
            C1: 'Конструктивная тревога/страх',
            C2: 'Деструктивная тревога/страх',
            C3: 'Дефицитарная тревога/страх',
            LO1: 'Конструктивное внешнее Я-отграничение',
            LO2: 'Деструктивное внешнее Я-отграничение',
            LO3: 'Дефицитарное внешнее Я-отграничение',
            LI1: 'Конструктивное внутреннее Я-отграничение',
            LI2: 'Деструктивное внутреннее Я-отграничение',
            LI3: 'Дефицитарное внутреннее Я-отграничение',
            N1: 'Конструктивный нарциссизм',
            N2: 'Деструктивный нарциссизм',
            N3: 'Дефицитарный нарциссизм',
            S1: 'Конструктивная сексуальность',
            S2: 'Деструктивная сексуальность',
            S3: 'Дефицитарная сексуальность',
        },
    },
};
