import React from 'react';
import MenuTop from './Menu/MenuTop';
import HeaderCenter from './HeaderCenter';
import styled from '@emotion/styled';

const HeaderBox =styled.div`
  width: 100%;
  height: 215px;
`;

export default function Header() {
  return (
    <HeaderBox>
      <MenuTop />
      <HeaderCenter />
    </HeaderBox>
  );
}


