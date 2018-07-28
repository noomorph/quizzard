import gator from 'gator';

const globalQueries = typeof window !== 'undefined' ? { window, document, '': null } : { '': null };

function toggleListeners(element, listenersMap = {}, shouldAddEventListeners = false) {
    if (listenersMap) {
        Object.keys(listenersMap).forEach(function processSelector(query) {
            Object.keys(listenersMap[query]).forEach(function processEventName(eventName) {
                // HACK: private Gator's _root selector
                const selector = globalQueries.hasOwnProperty(query) ? '_root' : query;

                if (shouldAddEventListeners) {
                    this.on(eventName, selector, listenersMap[query][eventName]);
                } else {
                    this.off(eventName, selector);
                }
            }, gator(globalQueries[query] || this));
        }, element);
    }
}

function mountListeners(element, listenersMap) {
    toggleListeners(element, listenersMap, true);
}

function unmountListeners(element, listenersMap) {
    toggleListeners(element, listenersMap, false);
}

const instanceMap = new WeakMap();
const listenersMap = new WeakMap();
const nodeMap = new WeakMap();

function safeRender(newPrototype, instance, node) {
    if (!newPrototype) {
        return node && node.innerHTML || '';
    }

    let html;
    const originalPrototype = Object.getPrototypeOf(instance);

    try {
        Object.setPrototypeOf(instance, newPrototype);
        html = instance.render();
    } catch (exception) {
        html = exception.toString();
    } finally {
        Object.setPrototypeOf(instance, originalPrototype);
    }

    return html || '';
}

let widgetsRegistry = {};

export function getWidgetClass(className) {
    return widgetsRegistry[className];
}

export function mountWidget(node, OldClass, NewClass, sharedData) {
    let instance;

    if (OldClass) {
        widgetsRegistry = this.oldWidgets; // HACK
        instance = instanceMap.get(node);
        unmountListeners(node, instance.listeners);
    } else {
        widgetsRegistry = this.newWidgets; // HACK
        instance = new NewClass(sharedData);
    }

    widgetsRegistry = this.oldWidgets; // HACK
    const oldHTML = safeRender(OldClass && OldClass.prototype, instance, node);
    widgetsRegistry = this.newWidgets; // HACK
    const newHTML = safeRender(NewClass && NewClass.prototype, instance);

    if (oldHTML.trim() !== newHTML.trim()) {
        node.innerHTML = newHTML; // eslint-disable-line no-param-reassign
    }

    if (OldClass && NewClass) {
        instance = Object.setPrototypeOf(instance, NewClass.prototype);
    }

    if (NewClass) {
        const listeners = instance.listeners;
        mountListeners(node, listeners);
        instanceMap.set(node, instance);
        listenersMap.set(instance, listeners);
        nodeMap.set(instance, node);
    } else {
        instanceMap.delete(node);
        listenersMap.delete(instance);
        nodeMap.delete(instance);
    }
}

export function forceRender(instance) {
    const node = nodeMap.get(instance);
    let listeners = listenersMap.get(instance);

    if (node) {
        unmountListeners(node, listeners);
        listeners = instance.listeners;
        listenersMap.set(instance, listeners);

        node.innerHTML = instance.render();
        mountListeners(node, listeners);
    }
}

export default function hotMount(root, oldWidgets = {}, newWidgets = {}, sharedData) {
    const allWidgets = Object.assign({}, oldWidgets, newWidgets);

    Object.keys(allWidgets).forEach((className) => {
        const nodes = [].slice.call(root.querySelectorAll(`[data-widget-class="${className}"]`));
        const OldClass = oldWidgets[className];
        const NewClass = newWidgets[className];

        nodes.forEach(node => mountWidget.call({
            oldWidgets,
            newWidgets,
        }, node, OldClass, NewClass, sharedData));
    });
}
