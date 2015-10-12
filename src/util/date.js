export function format(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getYear();

    year = year < 200 ? year + 1900 : year;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${day}.${month}.${year}`;
}
