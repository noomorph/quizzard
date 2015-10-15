import widgets from './widgets';
import hotMount from './hotMount';

hotMount(document.body, undefined, widgets);

if (module.hot) {
    let oldWidgets = widgets;

    module.hot.accept('./widgets', function () {
        let newWidgets = require('./widgets');
        hotMount(document.body, oldWidgets, newWidgets);
        oldWidgets = newWidgets;
    });
}
