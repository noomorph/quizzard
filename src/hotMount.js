import Gator from 'gator';

function toggleListeners(element, data, listenersMap = {}, shouldAddEventListeners = false) {
    Object.keys(listenersMap).forEach(function (query) {
        Object.keys(listenersMap[query]).forEach(function (eventName) {
            if (shouldAddEventListeners) {
                this.on(eventName, query, listenersMap[query][eventName].bind(data));
            } else {
                this.off(eventName, query);
            }
        }, this);
    }, Gator(element));
}

function mountListeners(element, data, listenersMap) {
    toggleListeners(element, data, listenersMap, true);
}

function unmountListeners(element, data, listenersMap) {
    toggleListeners(element, data, listenersMap, false);
}

let weakMap = new WeakMap();

export default function hotMount(root, oldWidgets = {}, newWidgets = {}) {
    let allWidgets = new Set([
        ...Object.keys(oldWidgets),
        ...Object.keys(newWidgets)
    ]);

    allWidgets.forEach(className => {
        let nodes = [...root.querySelectorAll(`[data-widget-class="${className}"]`)];
        let OldClass = oldWidgets[className];
        let NewClass = newWidgets[className];

        nodes.forEach(node => {
            let instance;

            if (OldClass) {
                instance = weakMap.get(node);
                unmountListeners(node, instance, OldClass.listeners);
            } else {
                instance = new NewClass();
            }

            let oldHTML = OldClass && OldClass.prototype.render.call(instance) || '';
            let newHTML = NewClass && NewClass.prototype.render.call(instance) || '';

            if (oldHTML.trim() !== newHTML.trim()) {
                node.innerHTML = newHTML;
            }

            if (OldClass && NewClass) {
                instance = Object.setPrototypeOf(instance, NewClass);
            }

            if (NewClass) {
                mountListeners(node, instance, NewClass.listeners);
                weakMap.set(node, instance);
            } else {
                weakMap.delete(node);
            }
        });
    });
}
