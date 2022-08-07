import {convertToUpperCaseFirstSymbol} from './utils'

class DomListener {
    constructor($root, options) {
        this.$root = $root
        this.listeners = options?.listeners || []
        this.nameComponent = options?.name 
    }

    initDomListeners() {        
        this.listeners.forEach(listener => {
            const method = getNameMethod(listener)
            
            if(!this[method]) {
                throw new Error(`Method ${method} is not implemented in <${this.nameComponent} /> component`)
            }
            this.$root.on(listener, this[method].bind(this))
        })
    }
}

function getNameMethod(subName) {
    return 'on' + convertToUpperCaseFirstSymbol(subName)
}


export default DomListener
