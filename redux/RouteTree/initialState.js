/* eslint-disable prefer-destructuring */
import RoutesNodesTree from '../../shared/helpers/RoutesNodesTree';
import compilationOptions from '../../compilationOptions';

const mainRoute = compilationOptions.forGithubPages ? 'bs-testovoe' : 'main';
const tree = new RoutesNodesTree(mainRoute, 'Main');
let currentNode = tree.head;
tree.add({ currentNode, routeSegment: 'r1', title: 'r1' });
tree.add({ currentNode, routeSegment: 'r2', title: 'r2' });

currentNode = tree.head.nodes[0];
tree.add({ currentNode, routeSegment: 'r11', title: 'r11' });
tree.add({ currentNode, routeSegment: 'r12', title: 'r12' });

const initialState = {
  routeTree: tree,
};

/* const TEST = RoutesNodesTree.serialize(tree);
const TEST2 = RoutesNodesTree.deserialize(TEST);
debugger; */

export default initialState;
