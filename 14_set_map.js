const map = new Map(); /* (Map(создаем  с помощью встроенного класса) - коллекция элементов ключ/значение, как и обьект, но ключами может выступать любой тип данных, даже функция или NaN) */

const objKey = {id:5};

map.set(objKey, "Hello World!");

console.log(map.get(objKey));
/* (работать можно только с помощью встроенных методов(можно цепочкой наподобие .then) - 
    new Map() - создать
    map.set(key, value) - добавить ключ/значение
    map.get(key) - получить по ключу
    map.has(key) - проверить наличие в map по ключу - на true/false
    map.delete(key)
    map.clear() - очистить коллекцию
    map.size - количество элементов в коллекции - не метод
    map.keys() - перебор коллекции - вернет ключи
    map.values() - перебор коллекции - вернет значения
    map.entries() - перебор коллекции - вернет коллекцию в виде массивов [ключ, значение]
    map.forEach - как у массивов
    let map = new Map(Object.entries(obj)) - cоздаем map из обьекта
    let obj = Object.fromEntries(map.entries()) - создаем обьект из map) */



const set = new Set(); /* (Set(создаем  с помощью встроенного класса) - коллекция уникальных элементов без ключей, при попытке добавить одинаковые значения они игнорируются, итерируемый, методы как и у Map(кроме add вместо set и get отсутствует)) */

set.add(5);
set.add(5);
set.add(4);
set.add(4);
set.add(3);
set.add(3);
set.add(3);
console.log(set);