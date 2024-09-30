/* (пример кеширующей функции) */

/* (для примера кешируем результаты функции факториала, в реальной работе смысла кешировать такие мелкие функции нет) */
function cashFunction(fn) {
    const cash = {}; /* (обьект кеша, записываем в него результаты вычислений функции факториала(ключ - аргумент n, значение - результат вычислений)) */
    return function(n) { /* (вызываем анонимную функцию, которая принимает аргумент из факториала) */
        if (cash[n]) { /* (проверяем обьект кеша - если есть ключ, соответствующий аргументу факториала, функцию факториала не запускаем, а выдаем значение по ключу из кеша) */
            console.log("From cash: " + cash[n]);
            return cash[n];
        } 
        let result = fn(n); /* (если соответствующего ключа в кеше нету, запускаем функцию факториала, возвращаем результат и записываем его в кеш) */
        console.log("executed by the function: " + result);
        cash[n] = result;
        return result;
    }
}

function factorial(n) { /* (функция для вычисления факториала) */
    let result = 1;
    while (n != 1) {
        result *= n;
        n -= 1;
    } 
    return result;
}

const cashFactorial = cashFunction(factorial); /* (привязываем факториал к кеширующей функции) */

cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(2);
cashFactorial(5);
cashFactorial(6);
cashFactorial(6);
cashFactorial(4);
cashFactorial(4);