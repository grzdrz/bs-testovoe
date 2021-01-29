/* eslint-disable arrow-body-style */
import { createTransform } from 'redux-persist';
import RoutesNodesTree from '../shared/helpers/RoutesNodesTree';

const setTransform = createTransform(
  (inboundState/* , key */) => { // срабатывает при обновлениях стейта
    const treeString = RoutesNodesTree.serialize(inboundState.routeTree);
    return treeString;
  },
  (outboundState, key) => { // достает из локалстора и пропихивает обратно в редюсер(регидрация)
    const tree = RoutesNodesTree.deserialize(outboundState);
    return { [key]: tree };
  },
  { whitelist: ['routeTree'] },
);

export default setTransform;
