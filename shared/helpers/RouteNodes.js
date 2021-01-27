/* eslint-disable max-classes-per-file */

const findRouteNode = (current, route) => {
  if (current.route === route) return current;

  let targetNode;
  current.nodes.forEach((node) => {
    if (!targetNode) targetNode = findRouteNode(node, route);
  });
  return targetNode;
};

const next = (tree, current, callback) => {
  if (tree.head === current) {
    callback(current);
  }
  if (!current.nodes.length) {
    /* callback(current); */
    return current;
  }

  current.nodes.forEach((node) => {
    callback(node);
    next(tree, node, callback);
  });
};

class RouteNode {
  constructor(
    routeSegment,
    title,
    prevNode,
    nodes,
  ) {
    this.routeSegment = routeSegment;
    this.title = title;

    this.prevNode = prevNode;
    this.nodes = nodes;
  }

  get route() {
    if (this.prevNode) return `${this.prevNode.route}/${this.routeSegment}`;
    return `/${this.routeSegment}`;
  }
}

class RouteNodesTree {
  constructor(route, title) {
    this.initialize(route, title);
  }

  initialize(routeSegment, title) {
    this.head = new RouteNode(routeSegment, title, undefined, []);

    this.current = this.head;
  }

  add(currentNode, { routeSegment, title }) {
    /* const fullRoute = this.formRoute(route); */
    const test = currentNode.nodes.map((node) => node.route).includes(currentNode.route/* fullRoute */);
    if (test) return; // TEMP не реагирует на повторяющиеся ноуты, уточнить поведение

    const newNode = new RouteNode(routeSegment, title, currentNode, []);

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

  findRoute(route) { // рекурсивный поиск нода с искомым путём
    const current = this.head;
    const targetNode = findRouteNode(current, route);
    return targetNode;
  }

  /* [Symbol.iterator]() {
    return new Iterator(this);
  } */
}

// TEST

const routeNodes = new RouteNodesTree('main', 'Main');
let current = routeNodes.head;
routeNodes.add(current, { routeSegment: 'r1', title: 'r1', });
routeNodes.add(current, { routeSegment: 'r2', title: 'r2', });

current = routeNodes.head.nodes[0];
routeNodes.add(current, { routeSegment: 'r11', title: 'r11', });
routeNodes.add(current, { routeSegment: 'r12', title: 'r12', });

const testPath = routeNodes.head.route;
const testPath2 = current.route;

/* debugger;
const route = routeNodes.findRoute('/main/r1/r12');
debugger; */

/* debugger;
routeNodes.remove(routeNodes.current);
debugger; */

/* debugger; */
const arrayOfNodes = [];
next(routeNodes, routeNodes.head, (currentNode) => {
  /* console.log(currentNode.title); */
  arrayOfNodes.push(currentNode);
});
debugger;

export default RouteNodesTree;
