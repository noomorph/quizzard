webpackJsonp([8,3],{0:function(e,t,a){e.exports=a(191)},32:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.metaData=void 0,a(166);var o=a(23),i=a(24),l=n(i),c=t.metaData={className:"Alexithymia",questionsCount:26,answers:[{value:0,cls:"a a0"},{value:1,cls:"a a1"},{value:2,cls:"a a2"},{value:3,cls:"a a3"},{value:4,cls:"a a4"}],scaleIds:["A"]},f=(0,o.buildMetaData)(c),d=(0,l["default"])([2,3,4,7,8,10,14,16,17,18,19,20,22,23,25,26]),_=(0,l["default"])([1,5,6,9,11,12,13,15,21,24]),v=function(e,t){return _.has(t)?5-e:NaN},b=function(e,t){return d.has(t)?e+1:v(e,t)},y=function(){function e(){u(this,e),this.answers=new Array(f.questionsCount)}return s(e,[{key:"calculate",value:function(){var e=this.answers.reduce(function(e,t,a){return e+b(t,a+1)},0);return r({},f.scales[0].id,{value:e})}},{key:"metaData",get:function(){return f}}]),e}();t["default"]=y},33:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(17);t["default"]={Alexithymia:{name:"Торонтская алекситимическая шкала",description:"Прочтите следующие утверждения. На каждое утверждение нужно дать один из пяти ответов: (1) совершенно не согласен, (2) скорее не согласен, (3) ни то, ни другое, (4) скорее согласен, (5) совершенно согласен.",questions:{1:"Когда я плáчу, всегда знаю почему.",2:"Мечты — это потеря времени.",3:"Я хотел бы быть не таким застенчивым.",4:"Я часто затрудняюсь определить какие чувства испытываю.",5:"Я часто мечтаю о будущем.",6:"Мне кажется, я так же способен легко заводить друзей, как и другие.",7:"Знать как решать проблемы более важно, чем понимать причины этих решений.",8:"Мне трудно находить правильные слова для моих чувств.",9:"Мне нравится ставить людей в известность о своей позиции по тем или иным вопросам.",10:"У меня бывают физические ощущения, которые непонятны даже докторам.",11:"Мне недостаточно знать, что привело к такому результату, мне необходимо знать, почему и как это происходит.",12:"Я способен с легкостью описать свои чувства.",13:"Я предпочитаю анализировать проблемы, а не просто их опысывать.",14:"Когда я расстроен, не знаю печален ли я, испуган или зол.",15:"Я часто даю волю воображению.",16:"Я провожу много времени в мечтах, когда не занят ничем другим.",17:"Меня часто озадачивают ощущения, появляющиеся в моем теле.",18:"Я редко мечтаю.",19:"Я предпочитаю, чтобы все шло само собой, чем понимать, почему произошло именно так.",20:"У меня бывают чувства, которым я не могу дать вполне точное определение.",21:"Очень важно уметь разбираться в эмоциях.",22:"Мне трудно описать свои чувства по отношению к людям.",23:"Люди мне говорят, чтобы я больше выражал свои чувства.",24:"Следует искать более глубокие объяснения происходящему.",25:"Я не знаю, что происходит у меня внутри.",26:"Я часто не знаю, почему сержусь."},answers:{0:(0,n.softbreak)("Со_вер_шен_но\nне сог_ла_сен"),1:(0,n.softbreak)("Скорее\nне сог_ла_сен"),2:(0,n.softbreak)("Ни то,\nни дру_гое"),3:(0,n.softbreak)("Скорее\nсог_ла_сен"),4:(0,n.softbreak)("Со_вер_шен_но\nсог_ла_сен")},scales:{A:"Алекситимичность"}}}},166:function(e,t){},191:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var u=a(70),s=n(u),o=a(69),i=n(o),l=a(33),c=n(l),f=a(32),d=n(f);(0,s["default"])({lang:"ru",translations:[].concat(r(i["default"]),[c["default"]]),Survey:d["default"]})}});