const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let count = 0;

/* (Алгоритм сортировки выбором - полностью проходим по массиву, находим наименьшее, меняем местами с первым элементом массива, сдвигаем старт на второй элемент массива, снова проходим полностью, находим наименьшее, меняем со вторым элементом, и так до последнего) */
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i; /* (минимальное число в итерации, сначала записываем первое в этм цикле, в следующем цикле каждый элемент массива сравниваем с ним, если находим меньшее - заменяем indexMin, так за полный проход по массиву находим меньшее) */
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
            count += 1; /* (cчетчик прохождений по массиву) */
        }
        /* (меняем местами меньшее) */
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array;
}


console.log(selectionSort(arr)); /* (вернет отсортированный массив) */
console.log("count = " + count); /* (в д.с выдаст 325, но сложность считается О(n**2) - для данного массива из 26 элементов это 676(по факту примерно половина)) */
