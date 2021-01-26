/* 'use strict' */
const mock = 0;

const findRouteNode = (current, route) => {
  if (current.route === route) return current;

  let targetNode;
  current.nodes.forEach((node) => {
    if (!targetNode) targetNode = findRouteNode(node, route);
  });
  return targetNode;
};

class RouteNodes {
  constructor(route, title) {
    this.initialize(route, title);
  }

  initialize(route, title) {
    this.head = {
      route: `/${route}`,
      title,
      prevNode: undefined,
      nodes: [],
    };

    this.current = this.head;
  }

  add(route, title) {
    const fullRoute = this.formRoute(route);
    const test = this.current.nodes.map((node) => node.route).includes(fullRoute);
    if (test) return; // TEMP не реагирует на повторяющиеся ноуты, уточнить поведение

    const newNode = {
      route: this.formRoute(route),
      title,
      prevNode: this.current,
      nodes: [],
    };

    this.current.nodes.push(newNode);
  }

  remove() {
    if (this.current === this.head) return; // TEMP уточнить поведение

    const removedNode = this.current;
    this.current = this.current.prevNode;
    this.current.nodes.filter((node) => node !== removedNode);
  }

  moveForward(targetRoute) {
    debugger;
    const target = this.current.nodes.find((node) => node.route === targetRoute);
    if (target) this.current = target;
  }

  moveBack() {
    if (this.current === this.head) return; // TEMP уточнить поведение

    debugger;
    this.current = this.current.prevNode;
  }

  formRoute(childRoute) {
    return `${this.current.route}/${childRoute}`;
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

/* const routeNodes = new RouteNodes('main', 'Main');
routeNodes.add('r1', 'r1');
routeNodes.add('r2', 'r2');

routeNodes.current = routeNodes.head.nodes[0];
routeNodes.add('r11', 'r11');
routeNodes.add('r12', 'r12');

debugger;
const route = routeNodes.findRoute('/main/r2');
debugger; */

export default RouteNodes;
