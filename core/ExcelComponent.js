import {DomListener} from "./DomListener.js";

export class ExcelComponent extends DomListener{
    constructor($root, option) {
        super($root, option)
    }

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