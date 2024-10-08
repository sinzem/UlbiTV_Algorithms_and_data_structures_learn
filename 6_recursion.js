/* (примеры рекурсии - самовызывающейся функции) */
const factorial = (n) => { /* (факториал 5 = 1 * 2 * 3 * 4 * 5) */
    if (n === 1) { /* (база рекурсии) */
        return 1;
    }
    return n * factorial(n - 1); /* (функция вызывает саму себя, пока не достигнет базы - получается в стеке несколько вызваных функций, которые начинают исполняться в обратном порядке, от последней, вызванной с базой) */
}

console.log(factorial(8));


const fibonacci = (n) => { /* (числа Фибоначчи - каждое число равно сумме двух предыдущих, n - количество чисел(1, 1, 2, 3, 5, 8, 13, 21)) */
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(9));
/* (каждый шаг рекурсии представляет собой вызов функции, который загружается в стек, соответственно, глубина рекурсии ограничена размером стека(n больше 10000 не используем - выдает ошибку о переполнении стека)) */