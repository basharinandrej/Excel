import ExcelComponent from '@CORE/ExcelComponent'

class Toolbar extends ExcelComponent {
    static classNames = ['excel__toolbar-excel', 'toolbar-excel']

    getHTML() {
        return `
            <button class="toolbar-excel__button">
                    <i class="material-icons">format_align_left</i>
                </button>
                <button class="toolbar-excel__button">
                    <i class="material-icons">format_align_center</i>
                </button>
                <button class="toolbar-excel__button toolbar-excel__button--gap">
                    <i class="material-icons">format_align_right</i>
                </button>
                <button class="toolbar-excel__button">
                    <i class="material-icons">format_bold</i>
                </button>
                </button>
                <button class="toolbar-excel__button">
                    <i class="material-icons">format_italic</i>
                </button>
                </button>
                <button class="toolbar-excel__button">
                    <i class="material-icons">format_underlined</i>
            </button>
        `
    }
}

export default Toolbar
