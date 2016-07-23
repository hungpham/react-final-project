import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavLink = (props, { router }) => {
  const isActive = router.isActive(props.to, true);
  const className = isActive ? 'active' : '';

  return (
    <li className={className}>
      <Link {...props}>
        {props.children}
      </Link>
    </li>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

NavLink.contextTypes = {
  router: PropTypes.object.isRequired
};

export default NavLink;
