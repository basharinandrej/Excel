import {ExcelComponent} from "../../core/ExcelComponent.js";
import {createTable} from "./table.template.js";
import {$} from '../../core/DOM.js'

export class Table extends ExcelComponent{
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() { return createTable(15) }

  onMousedown(e) {
    if (e.target.dataset.type === "resizer") {
      const $resizer = $(e.target)
      const $parent = $resizer.closest('[data-type="resizeble"]')
      const coords = $parent.getCoords()
      
      document.onmousemove = e => {
        let delta = e.pageX - coords.right
        let value = coords.width + delta 
        $parent.$el.style.width = value + 'px'
        document.querySelectorAll(`[data-col="${$parent.data.col}"]`)
          .forEach(el => {
            el.style.width = value + 'px'
          })
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }
    }





  }




}




















/* <div class="row">

                <div class="row-info"></div>

                <div class="row-data">
              <div class="column">
                A
              </div>
              <div class="column">
                B
              </div>
              <div class="column">
                C
              </div>
              <div class="column">
                A
              </div>
              <div class="column">
                B
              </div>
              <div class="column">
                C
              </div>
              <div class="column">
                A
              </div>
              <div class="column">
                B
              </div>
              <div class="column">
                C
              </div>
              <div class="column">
                A
              </div>
              <div class="column">
                B
              </div>
              <div class="column">
                C
              </div>
              <div class="column">
                A
              </div>
              <div class="column">
                B
              </div>
              <div class="column">
                C
              </div>
              <div class="column">
                A
              </div>
              <div class="column">
                B
              </div>
              <div class="column">
                C
              </div>
              <div class="column">
                A
              </div>
              <div class="column">
                B
              </div>
              <div class="column">
                C
              </div>
              <div class="column">
                A
              </div>
              <div class="column">
                B
              </div>
              <div class="column">
                C
              </div>
              <div class="column">
                A
              </div>
              <div class="column">
                B
              </div>
              <div class="column">
                C
              </div>
              <div class="column">
                A
              </div>
              <div class="column">
                B
              </div>
              <div class="column">
                C
              </div>

            </div>
            </div>

            <div class="row">
            <div class="row-info">
              1
            </div>

            <div class="row-data">
              <div class="cell selected" contenteditable="">A1</div>
              <div class="cell" contenteditable="">B2</div>
              <div class="cell" contenteditable="">C3</div>
            </div>
          </div>

            <div class="row">
            <div class="row-info">
              2
            </div>

            <div class="row-data">
              <div class="cell">A1</div>
              <div class="cell">B2</div>
              <div class="cell">C3</div>
            </div>
          </div>
*/
