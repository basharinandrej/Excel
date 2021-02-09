import {ExcelComponent} from "../../core/ExcelComponent.js";
import {$} from '../../core/DOM.js'
import {createTable} from "./table.template.js";
import resizeTable from './resize.table.js'
import shouldResize from './table.function.js'
import {isCell} from './table.function.js'
import selectedTable from "./selectedTable.js";

export class Table extends ExcelComponent{
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() { return createTable(15) }

  prepare() {
    this.select = new selectedTable()
  }
  
  init() {
    super.init()
    const $cell = this.$root.find('[data-id="0 : 0"]')
    this.select.selected($cell)
  }

  onMousedown(e) {
    if (shouldResize(e)) {
      resizeTable(e, this.$root)
    } else if (isCell(e)) {
      const $cell = $(e.target)
      this.select.selected($cell)
    }
  }
}
