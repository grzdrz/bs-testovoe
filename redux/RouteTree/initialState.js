/* eslint-disable prefer-destructuring */
import RoutesNodesTree from '../../shared/helpers/RoutesNodesTree';

const tree = new RoutesNodesTree('main', 'Main');
let current = tree.head;
tree.add(current, { routeSegment: 'r1', title: 'r1' });
tree.add(current, { routeSegment: 'r2', title: 'r2' });

current = tree.head.nodes[0];
tree.add(current, { routeSegment: 'r11', title: 'r11' });
tree.add(current, { routeSegment: 'r12', title: 'r12' });

const initialState = {
  routeTree: tree,
};

export default initialState;
