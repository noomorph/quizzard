export function setTitle(title) {
    document.title = title;
}

export function createTag(tagName, config) {
    const tag = document.createElement(tagName);

    for (const prop in config) {
        if (config[prop] !== undefined) {
            tag.setAttribute(prop, config[prop]);
        }
    }

    return tag;
}

export function addMetaTag(tagName, config) {
    const tag = createTag(tagName, config);
    document.getElementsByTagName('head').item(0).appendChild(tag);
}

function addTouchIconTag(size) {
    addMetaTag('link', {
        rel: 'apple-touch-icon-precomposed',
        sizes: size !== 57 ? `${size}x${size}` : undefined,
        href: `${this}-${size}.png`,
    });
}

export function initIcons(basePath) {
    const sizes = [57, 72, 114, 144];

    sizes.forEach(addTouchIconTag, basePath);

    addMetaTag('link', {
        rel: 'shortcut icon',
        href: `${basePath}.png`,
    });
}
