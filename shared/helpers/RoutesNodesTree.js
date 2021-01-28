import RouteNode from './RouteNode';

class RoutesNodesTree {
  constructor(route, title) {
    this.initialize(route, title);
  }

  initialize(routeSegment, title) {
    this.head = new RouteNode({ routeSegment, title, prevNode: null });
  }

  /**
   * Добавляет дочерний узел в указанный.
   * @param currentNode ссылка на целевой узел, в детей которого производится добавление нового узла.
   * @param routeSegment сегмент пути соответвующий добавляемому узлу
   * @param title титульник добавляемого узла
   */
  add({ currentNode, routeSegment, title }) {
    const hasSameRoute = currentNode.nodes.map((node) => node.routeSegment).includes(routeSegment);
    if (hasSameRoute) return;

    const newNode = new RouteNode({ routeSegment, title, prevNode: currentNode });

    currentNode.nodes.push(newNode);
  }

  /**
    * Удаляет указанный узел.
    *
    * При удалении узла его дети мерджатся с детьми родителя удаляемого элемента.
    *
    * Если среди детей удаляемого элемента и среди детей родителя удаляемого элемента есть ноды с потенциально одним роутом, то
    * дети удаляемого с коллизией отбрасываются при мердже.
    *
    * Если среди детей удаляемого элемента есть нод с потенциально таким же роутом как у удаляемого, то удаляемый нод заменяется на
    * этот дочерний нод.
    * @param removedNode ссылка на удаляемый узел
   */
  remove(removedNode) {
    if (removedNode === this.head) return;
    const parentNode = removedNode.prevNode;

    // переводим ссылки дочерних нодов удаляемого нода на родителя удаляемого
    removedNode.nodes.forEach((childNode) => {
      childNode.prevNode = removedNode.prevNode;
    });

    // убираем удаляемый из списка детей его родителя
    const parentChildrenNodesWithoutRemovedNode = parentNode.nodes.filter((childNode) => childNode !== removedNode);
    // получаем список роутов из списка детей родителя удаляемого
    const parentChildrenNodesRoutes = parentChildrenNodesWithoutRemovedNode.map((node) => node.route);
    // из списка детей удаляемого убираем ноды, роуты которых уже есть в списке детей родителя удаляемого
    const nodesToMerge = removedNode.nodes.filter((childeNode) => !parentChildrenNodesRoutes.includes(childeNode.route));
    // мерджим дочерние ноды удаляемого с дочерними нодами родителя удаляемого
    parentNode.nodes = parentChildrenNodesWithoutRemovedNode.concat(nodesToMerge);
  }

  /**
   * Рекурсивный поиск узла по его роуту.
   * @param route полный путь искомого узла.
   */
  find(route) {
    const current = this.head;
    if (route === '/') return current;
    const targetNode = this._findNode(current, route);
    return targetNode;
  }

  /**
   * Перебирает узлы древа
   * @param callback вызывается на каждом ноде.
   */
  iterate(callback) { // рекурсивный перебор с вызовом калбека на каждом ноде.
    this._next(this.head, callback);
  }

  /**
   * Превращает все древо в массив спец. объектов, а затем в json строку
   * (нативный сериализатор не переваривает двунаправленные связные списки из-за циклических ссылок у звеньев).
   * @param tree сериализуемое дерево.
   */
  static serialize(tree) {
    const arrayOfNodes = [];
    tree.iterate((node) => {
      arrayOfNodes.push({
        lvl: node.route.split('/').length,
        title: node.title,
        routeSegment: node.routeSegment,
        prevRoute: node.prevNode ? node.prevNode.route : null,
        nodesRoutes: node.nodes.map((childNode) => childNode.route),
      });
    });

    return JSON.stringify(arrayOfNodes);
  }

  /**
   * Десериализует результат полученный с использованием метода serialize.
   * @param treeString строка с сериализованным деревом.
   */
  static deserialize(treeString) {
    const arrayOfNodes = JSON.parse(treeString);
    const sortedArray = arrayOfNodes.sort((a, b) => a.lvl - b.lvl);

    const newTree = new RoutesNodesTree(sortedArray[0].routeSegment, sortedArray[0].title);
    for (let i = 1; i < sortedArray.length; i += 1) {
      const parentNode = newTree.find(sortedArray[i].prevRoute);
      newTree.add({
        currentNode: parentNode,
        routeSegment: sortedArray[i].routeSegment,
        title: sortedArray[i].title,
      });
    }

    return newTree;
  }

  _findNode(current, route) {
    if (current.route === route) return current;

    let targetNode;
    current.nodes.forEach((node) => {
      if (!targetNode) targetNode = this._findNode(node, route);
    });
    return targetNode;
  }

  _next(current, callback) {
    if (this.head === current) {
      callback(current);
    }
    if (!current.nodes.length) {
      return current;
    }

    current.nodes.forEach((node) => {
      callback(node);
      this._next(node, callback);
    });
  }
}

// TEST

/* const tree = new RoutesNodesTree('main', 'Main');
let current = tree.head;
tree.add({ currentNode, routeSegment: 'r1', title: 'r1', });
tree.add({ currentNode, routeSegment: 'r2', title: 'r2', });

current = tree.head.nodes[0];
tree.add({ currentNode, routeSegment: 'r11', title: 'r11', });
tree.add({ currentNode, routeSegment: 'r12', title: 'r12', });

const testPath = tree.head.route;
const testPath2 = current.route; */

/* debugger; */
/* const route = tree.find('/main/r1'); */
/* debugger; */

/* debugger; */
/* tree.remove(route); */
/* debugger; */

/* debugger; */
/* const arrayOfNodes = [];
tree.iterate((node) => arrayOfNodes.push(node)); */
/* debugger; */

export default RoutesNodesTree;
