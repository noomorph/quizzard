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

export function register(lang, data, forceRebuild = false) {
    dictionaries.set(lang, Object.assign(
        {}, data, dictionaries.get(lang)
    ));

    dirty.add(lang);

    if (forceRebuild) {
        build(lang);
    }
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
