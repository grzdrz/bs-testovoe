import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

const useCurrentNode = () => {
  const location = useLocation();
  const { routeTree } = useSelector((state) => state.routeTree);
  const currentNode = routeTree.find(location.pathname);
  const childrenCount = currentNode.nodes.length;

  return { childrenCount, currentNode };
};

export default useCurrentNode;
