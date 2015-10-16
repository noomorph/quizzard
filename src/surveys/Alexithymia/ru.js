import { linebreak, softbreak } from 'util/softbreak';

export default {
    'Alexithymia': {
        'name': 'Торонтская алекситимическая шкала',
        'description': '',
        'questions': {
            1: 'Когда я плáчу, всегда знаю почему.',
            2: 'Мечты — это потеря времени.',
            3: 'Я хотел бы быть не таким застенчивым.',
            4: 'Я часто затрудняюсь определить какие чувства испытываю.',
            5: 'Я часто мечтаю о будущем.',
            6: 'Мне кажется, я так же способен легко заводить друзей, как и другие.',
            7: 'Знать как решать проблемы более важно, чем понимать причины этих решений.',
            8: 'Мне трудно находить правильные слова для моих чувств.',
            9: 'Мне нравится ставить людей в известность о своей позиции по тем или иным вопросам.',
            10: 'У меня бывают физические ощущения, которые непонятны даже докторам.',
            11: 'Мне недостаточно знать, что привело к такому результату, мне необходимо знать, почему и как это происходит.',
            12: 'Я способен с легкостью описать свои чувства.',
            13: 'Я предпочитаю анализировать проблемы, а не просто их опысывать.',
            14: 'Когда я расстроен, не знаю печален ли я, испуган или зол.',
            15: 'Я часто даю волю воображению.',
            16: 'Я провожу много времени в мечтах, когда не занят ничем другим.',
            17: 'Меня часто озадачивают ощущения, появляющиеся в моем теле.',
            18: 'Я редко мечтаю.',
            19: 'Я предпочитаю, чтобы все шло само собой, чем понимать, почему произошло именно так.',
            20: 'У меня бывают чувства, которым я не могу дать вполне точное определение.',
            21: 'Очень важно уметь разбираться в эмоциях.',
            22: 'Мне трудно описать свои чувства по отношению к людям.',
            23: 'Люди мне говорят, чтобы я больше выражал свои чувства.',
            24: 'Следует искать более глубокие объяснения происходящему.',
            25: 'Я не знаю, что происходит у меня внутри.',
            26: 'Я часто не знаю, почему сержусь.',
        },
        'answers': {
            1: linebreak(softbreak('Со_вер_шен_но\nне сог_ла_сен')),
            2: linebreak(softbreak('Скорее\nне сог_ла_сен')),
            3: linebreak(softbreak('Ни то,\nни дру_гое')),
            4: linebreak(softbreak('Скорее\nсог_ла_сен')),
            5: linebreak(softbreak('Со_вер_шен_но\nсог_ла_сен')),
        },
        'scales': {
            'A': 'Алекситимичность',
        },
    },
};
