import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer.jsx';
import {NavMen} from '../../components/NavMen/NavMen.jsx';
import {CenterBlockk} from '../../components/CenterBlockk/CenterBlockk.jsx';
import {SideBarr} from '../../components/SideBarr/SideBarr.jsx';
import React from 'react';
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js';
import * as S from './main.styles.js';

export const MainPage = () => {
  return (
  <>
    <GlobalStyle />
    <S.Wrapper>
      <S.Container>
        <S.Main>
       <NavMen/>
          <CenterBlockk />
          <SideBarr />
        </S.Main>
        <AudioPlayer />
        <footer></footer>
      </S.Container>
    </S.Wrapper>
    </>
  );
}
