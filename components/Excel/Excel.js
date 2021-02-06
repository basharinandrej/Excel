import {ExcelComponent} from "../../core/ExcelComponent.js";
import {$} from "../../core/DOM.js";

export class Excel extends ExcelComponent {
    constructor(selector, options) {
        super()
        this.$el = $(selector)
        this.components = options.components
    }

    getRoot() {
        let $root = $.create('div', 'excel')

        // Массив интстансев   //this.components - ссылки на классы
        this.components = this.components.map( Component => {
            let $el = $.create('div', Component.className)
            let component = new Component($el)

            // DEBBUG START
            // if(component.name) {
            //     window['c' + component.name] = component
            // }
            // DEBBUG END

            $el.html(component.toHTML())
            $root.appendMy($el)
            return component
        })
        return $root
    }

    render() {
        // this.$el - #app
        this.$el.appendMy(this.getRoot())
        this.components.forEach(component => {
            component.init()
        })
    }
}