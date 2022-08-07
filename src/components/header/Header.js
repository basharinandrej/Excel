import ExcelComponent from '@CORE/ExcelComponent'

class Header extends ExcelComponent {
    static classNames = ['excel__header-excel', 'header-excel']

    getHTML() {
        return `
            <input type="text" value="Новая таблица" class="header-excel__title">

            <div class="header-excel__wrapper">
                <button class="header-excel__button">
                    <i class="material-icons header-excel__icon">delete_outline</i>
                </button>

                <a href="#" class="header-excel__link">
                    <i class="material-icons header-excel__icon">exit_to_app</i>
                </a>    
            </div>
        `
    }
}

export default Header
