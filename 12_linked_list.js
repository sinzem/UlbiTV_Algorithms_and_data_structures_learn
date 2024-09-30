/* (пример создания связанного списка) */

class LinkedList { /* (класс для создания списка) */
    constructor() {
        this.size = 0; /* (переменная для указания размера списка) */
        this.root = 0; /* (корневой элемент списка) */
    }

    add(value) { /* (функция добавления элементов) */
        if (this.size === 0) { /* (если длинна списка = 0, инициализируем ноду, как корневую) */
            this.root = new Node(value);
            this.size += 1;
            return true;
        }
        let node = this.root; /* (создаем переменную для добавления ноды, берем корневую) */
        while (node.next) { /* (перебираем значения next, до тех пор, пока next не равен null, пропускаем) */
            node = node.next;
        }
        let newNode = new Node(value); /* (создаем новый элемент/ноду) */
        node.next = newNode; /* (записываем ее в последнюю ноду по ключу next(был null)) */
        this.size += 1; /* (увеличиваем размер) */
    }

    getSize() { /* (функция чтобы посмотреть размер) */
        return this.size;
    }

    print() { /* (функция, чтобы посмотреть результат в виде массива) */
        let result = [];
        let node = this.root;
        while (node) {
            result.push(node.value);
            node = node.next;
        } 
        console.log(result);
    }
}

class Node { /* (класс для создания ноды - элемента списка) */
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const list = new LinkedList();
list.add(5);
list.add(3);
list.add(8);
list.add(12);
list.add(20);

list.print(); /* [ 5, 3, 8, 12, 20 ] */
console.log(list); /* LinkedList {
                            size: 5,
                            root: Node { value: 5, 
                                         next: Node { value: 3, 
                                                      next: Node {value: 8,
                                                                  next: Node {value: 12,
                                                                              next: Node {value: 20
                                                                                          next: null
                            } } } } }
                        }
                        */
                       /* (cвязанный список представляет собой цепочку вложенных обьектов, каждое звено в которой имеет ссылку на следующий обьект(принято обозначать ключем next), удобен для добавления элементов в конец или начало, для удаления, но не для адресного получения элементов, как в массивах - чтобы найти элемент, нужно перебрать и сравнить по цепочке до совпадения) */
