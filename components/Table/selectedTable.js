export default class selectedTable{
    static classSelected = 'selected'

    constructor() {
        this.group = []
        this.classSelected = 'selected'
    }

    selected($el) {
        this.group.push($el)
        this.clear()    
        $el.addClass(selectedTable.classSelected)
    }

    clear() {
        this.group.forEach(el => (
            el.removeClass(selectedTable.classSelected)
        ))
        this.group = this.group.filter((_, idx) => (
            idx === this.group.length - 1 
        ))

        console.log(this.group)
    }

    selectedGroup() {
    }
}