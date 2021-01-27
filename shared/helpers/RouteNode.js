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

export default RouteNode;
