webpackJsonp([1],{31:function(t,e,x){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e,x){return e in t?Object.defineProperty(t,e,{value:x,enumerable:!0,configurable:!0,writable:!0}):t[e]=x,t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var x=0;x<e.length;x++){var n=e[x];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,x,n){return x&&t(e.prototype,x),n&&t(e,n),e}}();x(69);var i=x(21),o=x(22),f=n(o),s=i.buildMetaData({className:"Alexithymia",questionsCount:26,answers:[{value:0,cls:"a a0"},{value:1,cls:"a a1"},{value:2,cls:"a a2"},{value:3,cls:"a a3"},{value:4,cls:"a a4"}],scaleIds:["A"]}),c=f["default"]([2,3,4,7,8,10,14,16,17,18,19,20,22,23,25,26]),l=f["default"]([1,5,6,9,11,12,13,15,21,24]),d=function(t,e){return l.has(e)?5-t:NaN},v=function(t,e){return c.has(e)?t+1:d(t,e)},b=function(){function t(){u(this,t),this.answers=new Array(s.questionsCount)}return a(t,[{key:"calculate",value:function(){var t=this.answers.reduce(function(t,e,x){return t+v(e,x+1)},0);return r({},s.scales[0].id,{value:t})}},{key:"metaData",get:function(){return s}}]),t}();e["default"]=b,t.exports=e["default"]},55:function(t,e,x){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=x(26);e["default"]={Alexithymia:{name:"Торонтская алекситимическая шкала",description:"Прочтите следующие утверждения. На каждое утверждение нужно дать один из пяти ответов: (1) совершенно не согласен, (2) скорее не согласен, (3) ни то, ни другое, (4) скорее согласен, (5) совершенно согласен.",questions:{1:"Когда я плáчу, всегда знаю почему.",2:"Мечты — это потеря времени.",3:"Я хотел бы быть не таким застенчивым.",4:"Я часто затрудняюсь определить какие чувства испытываю.",5:"Я часто мечтаю о будущем.",6:"Мне кажется, я так же способен легко заводить друзей, как и другие.",7:"Знать как решать проблемы более важно, чем понимать причины этих решений.",8:"Мне трудно находить правильные слова для моих чувств.",9:"Мне нравится ставить людей в известность о своей позиции по тем или иным вопросам.",10:"У меня бывают физические ощущения, которые непонятны даже докторам.",11:"Мне недостаточно знать, что привело к такому результату, мне необходимо знать, почему и как это происходит.",12:"Я способен с легкостью описать свои чувства.",13:"Я предпочитаю анализировать проблемы, а не просто их опысывать.",14:"Когда я расстроен, не знаю печален ли я, испуган или зол.",15:"Я часто даю волю воображению.",16:"Я провожу много времени в мечтах, когда не занят ничем другим.",17:"Меня часто озадачивают ощущения, появляющиеся в моем теле.",18:"Я редко мечтаю.",19:"Я предпочитаю, чтобы все шло само собой, чем понимать, почему произошло именно так.",20:"У меня бывают чувства, которым я не могу дать вполне точное определение.",21:"Очень важно уметь разбираться в эмоциях.",22:"Мне трудно описать свои чувства по отношению к людям.",23:"Люди мне говорят, чтобы я больше выражал свои чувства.",24:"Следует искать более глубокие объяснения происходящему.",25:"Я не знаю, что происходит у меня внутри.",26:"Я часто не знаю, почему сержусь."},answers:{0:n.softbreak("Со_вер_шен_но\nне сог_ла_сен"),1:n.softbreak("Скорее\nне сог_ла_сен"),2:n.softbreak("Ни то,\nни дру_гое"),3:n.softbreak("Скорее\nсог_ла_сен"),4:n.softbreak("Со_вер_шен_но\nсог_ла_сен")},scales:{A:"Алекситимичность"}}},t.exports=e["default"]},69:function(t,e){}});