/* (adjacency matrix - матрица смежноcти - двухмерный массив, каждый подмассив которого будет обозначать вершину графа, единицами в нем обозначены связи с другими вершинами по порядку(первая связана со второй и с третьей, вторая - только с пятой и т.д.)) */

const matrix = [
    [0,1,1,0,0,0,0],
    [0,0,0,0,1,0,0],
    [0,0,0,1,0,1,0],
    [0,0,0,0,0,1,0],
    [0,0,0,0,0,0,1],
    [0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0],
]