const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count = 0;
/* (бинарный поиск - значительно быстрее линейного, но работает только с отсортированными массивами) */
function binarySearch(array, item) { /* (передаем массив и значение для поиска) */
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end) { /* (до тех пор, пока не нашли совпадение и у массива есть длинна) */
        count += 1; /* (для подсчета операций) */
        middle = Math.floor((start + end) / 2); /* (берем среднее значение массива) */
        if (array[middle] === item) { /* (если значение равно искомому, возвращаем результат) */
            found = true;
            position = middle;
            return position;
        }
        /* (если значение меньше/больше среднего, переносим конец/начало(соответственно) на средину массива - далее поиск продолжится в половине массива - получаем логарифмическое уменьшение количества операций) */
        if (item < array[middle]) { 
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

console.log(binarySearch(array, 15));
console.log("Количество операций - " + count); /* (при данном методе поиска максимальное число операций выдаст 4(массив из 16 элементов) - но время выполнения большеБ чем у линейного поиска, так как сами операции сложнее, соответственно, на коротких массивах нет смысла применять) */

// -------------------------------------------------------

/* (бинарный поиск с помощью рекурсии(только для отсортированных массивов)) */
const arrayRec = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let countRec = 0;
/* (находим средину массива, если элемент не соответствует искомому, запускаем эту же функцию на половине массива, в которой находится искомое число) */
function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    countRec += 1;
    if (item === array[middle]) {
        return middle;
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1);
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end);
    }
}

console.log(recursiveBinarySearch(arrayRec, 12, 0, arrayRec.length));
console.log("count: " + countRec);