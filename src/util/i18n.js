import buildTranslationFunction from 'translate.js';

let currentLanguage;
const dirty = new Set();
const dictionaries = new Map();
const translates = new Map();

function build(lang, debug = true) {
    if (dirty.has(lang)) {
        const fn = buildTranslationFunction(dictionaries.get(lang), { debug });
        translates.set(lang, fn);
        dirty.delete(lang);
    }

    return translates.has(lang);
}

export function register(lang, data, forceRebuild = false) {
    dictionaries.set(lang, Object.assign(
        {}, data, dictionaries.get(lang),
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
    const fn = translates.get(currentLanguage) || translates.get('');
    return fn(...arguments);
}

register('', {});
build('');
change('');
