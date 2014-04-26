/* exported DomHelper */
/* global DomHelper */

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
