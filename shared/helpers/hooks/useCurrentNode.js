import { useSelector } from 'react-redux';
import { useLocation/* , useHistory */ } from 'react-router';

const useCurrentNode = () => {
  /* const history = useHistory(); */
  const location = useLocation();
  const { routeTree } = useSelector((state) => state.routeTree);
  const currentNode = routeTree.find(location.pathname);
  if (!currentNode) {
    /* history.push('/error'); */
    return { childrenCount: null, currentNode: null };
  }
  const childrenCount = currentNode.nodes.length;
  return { childrenCount, currentNode };
};

export default useCurrentNode;
