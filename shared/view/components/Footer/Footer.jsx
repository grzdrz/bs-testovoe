import React from 'react';
import block from 'bem-cn';

import useCurrentNode from '../../../helpers/hooks/useCurrentNode';
import ChildrenLinksList from '../ChildrenLinksList/ChildrenLinksList.jsx';
import './Footer.scss';

const b = block('footer');

const Footer = () => {
  const { currentNode } = useCurrentNode();

  return (
    <footer className={b()}>
      <p className={b('title')}>Children nodes</p>
      {currentNode ? (
        <nav className={b('navigation')}>
          <ChildrenLinksList currentNode={currentNode} />
        </nav>
      ) : null}
    </footer>
  );
};

export default Footer;
