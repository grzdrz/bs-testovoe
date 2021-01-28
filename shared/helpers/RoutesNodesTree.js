import RouteNode from './RouteNode';

class RoutesNodesTree {
  constructor(route, title) {
    this.initialize(route, title);
  }

  initialize(routeSegment, title) {
    this.head = new RouteNode(routeSegment, title, null);
  }

  add({ currentNode, routeSegment, title }) {
    const hasSameRoute = currentNode.nodes.map((node) => node.routeSegment).includes(routeSegment);
    if (hasSameRoute) return; // TEMP не реагирует на повторяющиеся роуты, уточнить поведение

    const newNode = new RouteNode(routeSegment, title, currentNode);

    currentNode.nodes.push(newNode);
  }

  remove(removedNode) {
    if (removedNode === this.head) return; // TEMP уточнить поведение

    // переводим ссылки дочерних нодов удаляемого нода на предыдущий нод относительно удаляемого
    removedNode.nodes.forEach((childNode) => {
      childNode.prevNode = removedNode.prevNode;
    });

    // удаляем из списка дочерних нодов родительского нода удаляемый нод
    // и тут же пришиваем к дочерним нодам родителя дочерние ноды удаляемого нода
    const parentNode = removedNode.prevNode;
    const changedParentNodes = parentNode.nodes
      .filter((childNode) => childNode !== removedNode)
      .concat(removedNode.nodes);
    parentNode.nodes = changedParentNodes;

    removedNode = null; //
  }

  find(route) { // рекурсивный поиск нода с искомым путём
    const current = this.head;
    const targetNode = this._findNode(current, route);
    return targetNode;
  }

  iterate(callback) { // рекурсивный перебор с вызовом калбека на каждом ноде
    this._next(this.head, callback);
  }

  static serialize(tree) {
    const arrayOfNodes = [];
    tree.iterate((node) => {
      arrayOfNodes.push({
        lvl: node.route.split('\/').length,
        title: node.title,
        routeSegment: node.routeSegment,
        prevRoute: node.prevNode ? node.prevNode.route : null,
        nodesRoutes: node.nodes.map((childNode) => childNode.route),
      });
    });

    return JSON.stringify(arrayOfNodes);
  }

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

  // eslint-disable-next-line consistent-return
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
