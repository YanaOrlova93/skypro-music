import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer.jsx';
import {NavMenu} from '../../components/NavMenu/NavMenu.jsx';
import {Centerblock} from '../../components/CenterBlock/CenterBlock.jsx';
import {Sidebar} from '../../components/SideBar/SideBar.jsx';
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
       <NavMenu />
          <Centerblock />
          <Sidebar />
        </S.Main>
        <AudioPlayer />
        <footer></footer>
      </S.Container>
    </S.Wrapper>
    </>
  );
}
