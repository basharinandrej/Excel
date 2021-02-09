import {$} from '../../core/DOM.js'

export default function resizeTable(e, $root) {
    const $resizer = $(e.target)
    const $parent = $resizer.closest('[data-type="resizeble"]')
    const coords = $parent.getCoords()
    const type = $resizer.data.resize
    let value 
    let cells = $root.findAll(`[data-col="${$parent.data.col}"]`)

    $resizer.css({opacity: 1, bottom: -100 + 'vh'})

    document.onmousemove = e => {
        if (type === 'col') {
        let delta = e.pageX - coords.right
        value = coords.width + delta 

        $resizer.css({
            right: -delta + 'px',
        })
        } else {
        let delta = e.pageY - coords.bottom
        value = coords.height + delta 
        $resizer.css({
            bottom: -delta + 'px',
            width: 100 + 'vw',
            opacity: 1
        })
        }
    }

    document.onmouseup = () => {
        if( type === 'col') {
        $parent.css({width: value + 'px'})

        cells.forEach(el => $(el).css({width: value + 'px'}))

        $resizer.css({
            right: 0 + 'px',
            opacity: 0
        })
        } else {
        $parent.css({height: value + 'px'})
        $resizer.css({
            bottom: 0,
            opacity: 0
        })
        }

        document.onmousemove = null
        document.onmouseup = null
    }
}