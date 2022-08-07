import ExcelComponent from '@CORE/ExcelComponent'
import { $ } from '@Dom/index'

class Excel extends ExcelComponent {
    constructor(selector, options) {
        super()
        this.$root = $(selector)
        this.collectionComponents = options?.components || []
    }

    _appendComponentsInRootWrapper() {
        const $rootWrapper = $.create('div', 'excel')

        this.collectionComponents = this.collectionComponents.map((Component) => {
            const $el = $.create('div', Component.classNames)
            const component = new Component($el)
            $el.setHTML(component.toHTML())
            $rootWrapper.setHTML($el)

            return component
        })
        return $rootWrapper
    }

    render() {
        const $rootWrapper = this._appendComponentsInRootWrapper()
        this.$root.setHTML($rootWrapper)

        this.collectionComponents.forEach(component => component.init())
    }
}

export default Excel
