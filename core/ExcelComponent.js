import {DomListener} from "./DomListener.js";

export class ExcelComponent extends DomListener{
    constructor($root, option) {
        super($root, option)
        this.prepare()
    }

    prepare() {}

    toHTML(){
        return ''
    }

    init() {
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
    }
}