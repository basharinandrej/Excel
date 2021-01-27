import {Excel} from "./components/Excel/Excel.js";
import {Header} from "./components/Header/Header.js";
import {Formula} from "./components/Formula/Formula.js";
import {Toolbar} from "./components/Toolbar/Toolbar.js";
import {Table} from "./components/Table/Table.js";


const excel = new Excel('app', {
    components: [Header, Formula, Toolbar, Table]
})

excel.render()