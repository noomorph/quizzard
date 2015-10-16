export function softbreak(str) {
    return str && str.replace(/_/g, '<wbr/>');
}

export function linebreak(str) {
    return str && str.replace(/\n/g, '<br/>');
}
