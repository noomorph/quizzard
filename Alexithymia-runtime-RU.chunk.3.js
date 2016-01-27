webpackJsonp([3],{32:function(e,a,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function u(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}();Object.defineProperty(a,"__esModule",{value:!0}),a.metaData=void 0,n(166);var i=n(23),o=n(24),l=t(o),c=a.metaData={className:"Alexithymia",questionsCount:26,answers:[{value:0,cls:"a a0"},{value:1,cls:"a a1"},{value:2,cls:"a a2"},{value:3,cls:"a a3"},{value:4,cls:"a a4"}],scaleIds:["A"]},f=(0,i.buildMetaData)(c),_=(0,l["default"])([2,3,4,7,8,10,14,16,17,18,19,20,22,23,25,26]),b=(0,l["default"])([1,5,6,9,11,12,13,15,21,24]),d=function(e,a){return b.has(a)?5-e:NaN},v=function(e,a){return _.has(a)?e+1:d(e,a)},y=function(){function e(){u(this,e),this.answers=new Array(f.questionsCount)}return s(e,[{key:"calculate",value:function(){var e=this.answers.reduce(function(e,a,n){return e+v(a,n+1)},0);return r({},f.scales[0].id,{value:e})}},{key:"metaData",get:function(){return f}}]),e}();a["default"]=y},33:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(17);a["default"]={Alexithymia:{name:"Торонтская алекситимическая шкала",description:"Прочтите следующие утверждения. На каждое утверждение нужно дать один из пяти ответов: (1) совершенно не согласен, (2) скорее не согласен, (3) ни то, ни другое, (4) скорее согласен, (5) совершенно согласен.",questions:{1:"Когда я плáчу, всегда знаю почему.",2:"Мечты — это потеря времени.",3:"Я хотел бы быть не таким застенчивым.",4:"Я часто затрудняюсь определить какие чувства испытываю.",5:"Я часто мечтаю о будущем.",6:"Мне кажется, я так же способен легко заводить друзей, как и другие.",7:"Знать как решать проблемы более важно, чем понимать причины этих решений.",8:"Мне трудно находить правильные слова для моих чувств.",9:"Мне нравится ставить людей в известность о своей позиции по тем или иным вопросам.",10:"У меня бывают физические ощущения, которые непонятны даже докторам.",11:"Мне недостаточно знать, что привело к такому результату, мне необходимо знать, почему и как это происходит.",12:"Я способен с легкостью описать свои чувства.",13:"Я предпочитаю анализировать проблемы, а не просто их опысывать.",14:"Когда я расстроен, не знаю печален ли я, испуган или зол.",15:"Я часто даю волю воображению.",16:"Я провожу много времени в мечтах, когда не занят ничем другим.",17:"Меня часто озадачивают ощущения, появляющиеся в моем теле.",18:"Я редко мечтаю.",19:"Я предпочитаю, чтобы все шло само собой, чем понимать, почему произошло именно так.",20:"У меня бывают чувства, которым я не могу дать вполне точное определение.",21:"Очень важно уметь разбираться в эмоциях.",22:"Мне трудно описать свои чувства по отношению к людям.",23:"Люди мне говорят, чтобы я больше выражал свои чувства.",24:"Следует искать более глубокие объяснения происходящему.",25:"Я не знаю, что происходит у меня внутри.",26:"Я часто не знаю, почему сержусь."},answers:{0:(0,t.softbreak)("Со_вер_шен_но\nне сог_ла_сен"),1:(0,t.softbreak)("Скорее\nне сог_ла_сен"),2:(0,t.softbreak)("Ни то,\nни дру_гое"),3:(0,t.softbreak)("Скорее\nсог_ла_сен"),4:(0,t.softbreak)("Со_вер_шен_но\nсог_ла_сен")},scales:{A:"Алекситимичность"}}}},166:function(e,a){}});