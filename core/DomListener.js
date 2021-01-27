import {capitalize} from "./utils.js";

export class DomListener{
    constructor($root, option = {}) {
        this.$root = $root
        this.listeners = option.listeners || []
        this.nameComponent = option.name
    }

    initDOMListeners() {
        this.listeners.forEach( listener => {
            let method = getMethodName(listener)
            if( !this[method] ) {
                throw Error(`Method ${method} is not implemented ${this.nameComponent} component`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDOMListeners() {
        this.listeners.forEach( listener => {
            let method = getMethodName(listener)

            this.$root.off(listener, this[method])
        })
    }
}

// Input => onInput
function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}