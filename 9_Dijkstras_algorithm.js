/* (Поиск кратчайшего пути в графе по алгоритму Дейкстры) */

/* (в д.с вершины имеют не только ссылки к соседним вершинам, но и величины досягаемости) */
const graph = {};
graph.a = {b: 2, c: 1};
graph.b = {f: 7};
graph.c = {d: 5, e: 2};
graph.d = {f: 2};
graph.e = {f: 1};
graph.f = {g: 1};
graph.g = {};

function shortPath(graph, start, end) { /* (функция для получения кратчайшего пути) */
    const costs = {}; /* (для хранения таблицы значений кратчайших путей) */
    const processed = []; /* (для хранения уже проверенных узлов) */
    let neighbors = {}; /* (для соседних узлов рассматриваемой вершины) */
    Object.keys(graph).forEach(node => { /* (перебираем вершины) */
        if (node !== start) { /* (стартовую пропускаем) */
            let value = graph[start][node]; /* (получаем значение вершин, совмесных со стартовой) */
            costs[node] = value || 1000000000; /* (если получили значение, записываем его в costs, если соединяющего пути нет, прописываем любое огромное значение(например у соседнего с "a" "c" будет значение 1, а "e" не имеет общего соединения - прописываем e: 10000000)) */
        }
    })
    let node = findNodeLowestCost(costs, processed); /* (запускаем функцию по поиску следующих доступных вершин, передаем в нее обьект с уже обработанными суммами и массив с обработанными узлами) */
    while (node) {
        const cost = costs[node]; /* (получаем вершину) */
        neighbors = graph[node]; /* (сразу добавляем в массив соседних) */
        Object.keys(neighbors).forEach(neighbor => { /* (перебираем вершины из массива соседних) */
            let newCost = cost + neighbors[neighbor]; /* (получаем расстояние к соседней вершине) */
            if(newCost < costs[neighbor]) {
                costs[neighbor] = newCost; /* (записываем наименьший показатель в массив результатов) */
            }
        })
        processed.push(node); /* (добавляем вершину в массив обработанных) */
        node = findNodeLowestCost(costs, processed); /* (перезапускаем функцию для получения соседней вершины) */
    }
    return costs;
}

function findNodeLowestCost(costs, processed) { /* (функция по получению следующей соседней вершины) */
    let lowestCost = 1000000000;
    let lowestNode;
    Object.keys(costs).forEach(node => { /* (перебираем полученный обьект с вершинами и прописанными значениями) */
        let cost = costs[node];
        if (cost < lowestCost && !processed.includes(node)) { /* (если вершина имеет путь до следующей(не 10000000) и еще не обрабатывалась, возвращаем ее) */
            lowestCost = cost;
            lowestNode = node;
        }
    })
    return lowestNode;
}

console.log(shortPath(graph, "a", "g")); /* (вернуло обьект таблицу с кратчайшими путями({ b: 2, c: 1, d: 6, e: 3, f: 4, g: 5 }) - окончательный результат правильный(от а до g = 5), но выдало все точки, включая лишние(b: 2, d: 6) - кратчайший путь выдает, но маршрут не построит) */