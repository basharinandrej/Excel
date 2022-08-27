export function convertToUpperCaseFirstSymbol(string = '') {
    if(typeof string !== 'string') ''

    return string.charAt(0).toUpperCase() + string.slice(1)
}
