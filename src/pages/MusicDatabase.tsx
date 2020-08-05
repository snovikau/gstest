import React, { FC } from 'react';
import MusicList from 'modules/music-list';
import StyledPageWrapper from './styles';

export const MusicDatabasePage: FC = () => (
  <StyledPageWrapper>
    <MusicList />
  </StyledPageWrapper>
);
