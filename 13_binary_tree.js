/* (Бинарное дерево - по сути как связанный список, только сортируем при создании - каждая нода имеет две дочерние ноды - left и right, в левую скидываем значения меньше корневой, в правую - больше) */

class BinaryTree {

    constructor() {
        this.root = null; /* (корневая нода) */
    }

    add(value) { /* (функция добавления нод) */
        if (!this.root) { /* (если корневой еще нет - создаем) */
            this.root = new TreeNode(value);
        } else {
            let node = this.root;
            let newNode = new TreeNode(value); /* (создаем новую ноду, если она меньше корневого значения - перебираем левую ветку, пока не найдем пустое значение, в него и записываем, если больше - идем по правой ветке) */
            while (node) {
                if (value > node.value) {
                    if (!node.right) {
                        break;
                    }
                    node = node.right
                } else {
                    if (!node.left) {
                        break
                    }
                    node = node.left;
                }
            }
            if (value > node.value) {
                node.right = newNode;
            } else {
                node.left = newNode;
            }
        }
    }

    print(root = this.root) { /* (функция для просмотра значений дерева) */
        if (!root) {
            return true;
        }
        console.log(root.value);
        this.print(root.left);
        this.print(root.right);
    }
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BinaryTree();

tree.add(5);
tree.add(4);
tree.add(6);
tree.add(2);
tree.add(2);
tree.add(7);
tree.add(5);
tree.add(5);
tree.add(9);
tree.add(5);
tree.add(3);
tree.add(4);

tree.print();

console.log(tree);