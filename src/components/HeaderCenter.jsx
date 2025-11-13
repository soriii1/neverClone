import React from 'react';
import Search from './Menu/Search';
import styled from '@emotion/styled';

const HeaderCenterBox = styled.div`
  width: 1280px;
  height: 167px;
  background-color: rgb(255, 255, 255);
`;

export default function HeaderCenter() {
  return (
    <HeaderCenterBox>
      <Search />
    </HeaderCenterBox>
  );
}


