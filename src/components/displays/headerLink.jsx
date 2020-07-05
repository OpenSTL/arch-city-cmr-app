import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";

export default function HeaderLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Link 
     	to={to}
      className={`header-link ${match ? 'header-link-active' : ''}`}
    >
      {label}
    </Link>
  );
}