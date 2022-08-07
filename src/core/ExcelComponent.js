import DomListener from '@CORE/DomListener'

class ExcelComponent extends DomListener {
    constructor($root, options) {
        super($root, options?.listeners)
    }

    /*Вернёт HTML разметку компонента*/
    getHTML() {
        return ''
    }

    init() {
        this.initDomListeners()
    }

}

export default ExcelComponent
