class RouteNode {
  constructor({
    routeSegment,
    title,
    prevNode,
  }) {
    this.routeSegment = routeSegment;
    this.title = title;

    this.prevNode = prevNode;
    this.nodes = [];
  }

  /**
   * Собирает полный путь текущего узла из сегментов в цепочке узлов-предков.
   */
  get route() {
    if (this.prevNode) return `${this.prevNode.route}/${this.routeSegment}`;
    return `/${this.routeSegment}`;
  }
}

export default RouteNode;
