import { register, change } from 'util/i18n';

[
    require('./common-ru'),
    require('surveys/Alexithymia/ru'),
    require('surveys/Amon/ru'),
    require('surveys/Emin/ru'),
    require('surveys/SPA/ru'),
].forEach(dic => register('ru', dic.default));

change('ru');

export const Alexithymia = require('surveys/Alexithymia').default;
export const Amon = require('surveys/Amon').default;
export const Emin = require('surveys/Emin').default;
export const SPA = require('surveys/SPA').default;
