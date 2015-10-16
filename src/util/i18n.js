import buildTranslationFunction from 'translate.js';

let currentLanguage;
let dirty = new Set();
let dictionaries = new Map();
let translates = new Map();

function build(lang, debug = true) {
    if (dirty.has(lang)) {
        let fn = buildTranslationFunction(dictionaries.get(lang), { debug });
        translates.set(lang, fn);
        dirty.delete(lang);
    }

    return translates.has(lang);
}

export function register(lang, data) {
    dictionaries.set(lang, {
        ...(dictionaries.get(lang) || {}),
        ...data,
    });

    dirty.add(lang);
}

export function change(lang) {
    if (dictionaries.has(lang) && build(lang)) {
        currentLanguage = lang;
        return true;
    }

    return false;
}

export default function translate() {
    let fn = translates.get(currentLanguage) || translates.get('');
    return fn(...arguments);
}

register('', {});
build('');
change('');
