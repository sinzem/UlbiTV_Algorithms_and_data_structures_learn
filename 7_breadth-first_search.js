/* (breadth-first search - поиск в ширину) */

/* (в д.с граф представляет собой обьект, где ключ представляет собой вершину, а значение - массив с доступными соседними вершинами) */
const graph = {};

graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

let cur = 0;

function breadthSearch(graph, start, end) { /* (передаем сам граф и точки старта и окончания маршрута) */
    let queue = []; /* (очередь - массив с обрабатываемыми точками) */
    queue.push(start); /* (закидываем стартовую точку) */
    while (queue.length > 0) {
        cur += 1;
        const current = queue.shift(); /* (удаляем из очереди стартовую точку, если в ее значениях содержится конечный результат, выдаем итог true, если нет - добавляем ее ключи в очередь и снова обрабатываем) */
        // const current = queue.pop();
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]];
        }
    }
    return false;
}

console.log(breadthSearch(graph, "a", "g"));
console.log("current: " + cur);
/* (выдает результат true/false от точки start до end, автор работал через shift, но в д.с разницы нет shift или pop, функция сидьно упрощена, обещанный кратчайший путь не выводит, с поиском в ширину имеет мало общего) */


