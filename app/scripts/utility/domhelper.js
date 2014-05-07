/* jshint bitwise: false */
/* exported DomHelper */
/* global DomHelper */

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        if ( this === undefined || this === null ) {
            throw new TypeError( '"this" is null or not defined' );
        }

        var length = this.length >>> 0; // Hack to convert object.length to a UInt32

        fromIndex = +fromIndex || 0;

        if (Math.abs(fromIndex) === Infinity) {
            fromIndex = 0;
        }

        if (fromIndex < 0) {
            fromIndex += length;
            if (fromIndex < 0) {
                fromIndex = 0;
            }
        }

        for (;fromIndex < length; fromIndex++) {
            if (this[fromIndex] === searchElement) {
                return fromIndex;
            }
        }

        return -1;
    };
}

Array.prototype.half = function (index) {
    if (this === undefined || this === null) {
        throw new TypeError( '"this" is null or not defined' );
    }

    var n = this.length,
        arr = [],
        i, j;

    n += n % 2;
    i = index === 0 ? 0 : n / 2;
    j = index === 0 ? n / 2 : n;

    for (; i < j; i++) {
        arr.push(this[i]);
    }

    return arr;
};

window.DomHelper = {
    setTitle: function (title) {
        document.title = title;
    },
    createTag: function (tagName, config) {
        var tag, p;
        if (document.createElement && (tag = document.createElement(tagName))) {
            for (p in config) {
                if (config[p] !== undefined) {
                    tag.setAttribute(p, config[p]);
                }
            }
        }
        return tag;
    },
    addMetaTag: function (tagName, config) {
        var tag = DomHelper.createTag(tagName, config);
        document.getElementsByTagName('head').item(0).appendChild(tag);
    },
    initIcons: function (basePath) {
        var i, sizes = [57, 72, 114, 144];

        for (i = 0; i < sizes.length; i++) {
            var size = sizes[i];
            DomHelper.addMetaTag("link", {
                rel: "apple-touch-icon-precomposed",
                sizes: size !== 57 ? size + 'x' + size : undefined,
                href: basePath + '-' + size + '.png'
            });
        }

        DomHelper.addMetaTag("link", {
            rel: "shortcut icon",
            href: basePath + '.png'
        });
    }
};
