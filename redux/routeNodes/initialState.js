/* eslint-disable prefer-destructuring */
import RouteNodes from '../../shared/helpers/RouteNodes';

const routeNodes = new RouteNodes('main', 'Main');

routeNodes.add('r1', 'r1');
routeNodes.add('r2', 'r2');

routeNodes.current = routeNodes.head.nodes[0];
routeNodes.add('r11', 'r11');
routeNodes.add('r12', 'r12');

const initialState = {
  routeNodes,
};

export default initialState;
