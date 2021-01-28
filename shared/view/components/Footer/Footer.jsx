import React from 'react';
import block from 'bem-cn';

import useCurrentNode from '../../../helpers/hooks/useCurrentNode';
import Button from '../Button/Button.jsx';
import './Footer.scss';

const b = block('footer');

const Footer = () => {
  const { currentNode } = useCurrentNode();

  return (
    <footer className={b()}>
      <p className={b('title')}>Children nodes</p>
      <ul className={b('links')}>
        {currentNode.nodes.map((node) => (
          <li className={b('link')} key={node.route}>
            <Button
              to={node.route}
              text={`to ${node.title}`}
              hasArrow
              arrowDirection="down"
            >
              {node.title}
            </Button>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
