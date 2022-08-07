import '@STYLES/index.sass'
import Excel from '@Components/excel/Excel'
import Formula from '@Components/formula/Formula'
import Toolbar from '@Components/toolbar/Toolbar'
import Table from '@Components/table/Table'
import Header from '@Components/header/Header'

const excel = new Excel('#root', {
    components: [Header, Toolbar, Formula, Table],
})

excel.render()
