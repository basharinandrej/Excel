export function capitalize(str) {
    if(typeof str !== 'string') {
        throw Error('В функцию capitalize пришла не строка')
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}