export function get_items(arr){//ф-я возвращающая все итемы против врага
    let empty = [];
    arr.forEach(hero=>{
        return hero.hate_items.forEach(item=>empty.push(item));
    });
    return empty;
}