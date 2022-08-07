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
    return 'on' + toUpperCaseFirstSymbol(subName)
}

function toUpperCaseFirstSymbol(string = '') {
    if(typeof string !== 'string') ''

    return string.charAt(0).toUpperCase() + string.slice(1)
}

export default DomListener
