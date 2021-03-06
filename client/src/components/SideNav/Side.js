import React from 'react';
import { SideNav, Button, Icon } from 'react-materialize';
import { SideLoggedOut } from '../SideNavItems';
import './Side.css';

export const Side = () => (
  <SideNav
    trigger={<Button floating large className="menu-btn"><Icon>menu</Icon></Button>}
    options={{ closeOnClick: true }}
  >
    <SideLoggedOut />
  </SideNav>
);

